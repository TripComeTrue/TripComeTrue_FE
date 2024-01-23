import { useNavigate } from 'react-router-dom';
import { useSuspenseQueries } from '@tanstack/react-query';
import { Spots, SubTitle } from '@/components/common';
import { getCityStores, getPlacesStores, getTripStores } from '@/apis/mypage';
import MyPageItemNone from '../MyPageItemNone/MyPageItemNone';

function MyPageWishList() {
  const results = useSuspenseQueries({
    queries: [
      { queryKey: ['wishlist', 'trip-records'], queryFn: getTripStores },
      { queryKey: ['wishlist', 'cities'], queryFn: getCityStores },
      { queryKey: ['wishlist', 'places'], queryFn: getPlacesStores },
    ],
  });
  const navigate = useNavigate();
  const onClickMore = (value: string) => {
    navigate(value);
  };

  const trip = results[0].data.data.content.map((item) => ({
    postImg: item.imageUrl,
    bookmark: item.storeCount,
    postTitle: item.title,
  }));
  const city = results[1].data.data.content.map((item) => ({
    postImg: item.imageUrl,
    bookmark: item.storeCount,
    postTitle: item.name,
    reviews: 0,
  }));
  const places = results[2].data.data.content.map((item) => ({
    postImg: item.imageUrl ?? '',
    bookmark: item.storedCount,
    postTitle: item.name,
  }));

  return (
    <div>
      <SubTitle
        variant={trip.length > 0 ? 'more' : undefined}
        margin="1rem"
        onClickButton={() => onClickMore('trip-records')}>
        보관 여행 후기
      </SubTitle>
      <Spots creator={trip} sort="center" isDelete />
      {trip.length === 0 && <MyPageItemNone />}
      <SubTitle
        variant={city.length > 0 ? 'more' : undefined}
        margin="1rem"
        onClickButton={() => onClickMore('cities')}>
        보관 도시
      </SubTitle>
      <Spots creator={city} sort="left" isDelete />
      {city.length === 0 && <MyPageItemNone />}
      <SubTitle
        variant={places.length > 0 ? 'more' : undefined}
        margin="1rem"
        onClickButton={() => onClickMore('places')}>
        보관 여행지
      </SubTitle>
      <Spots creator={places} sort="space" isDelete />
      {places.length === 0 && <MyPageItemNone />}
    </div>
  );
}

export default MyPageWishList;
