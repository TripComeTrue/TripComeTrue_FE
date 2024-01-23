import { useNavigate } from 'react-router-dom';
import { useSuspenseQueries } from '@tanstack/react-query';
import { Spots, SubTitle } from '@/components/common';
import { getCityStores, getPlacesStores, getTripStores } from '@/apis/mypage';

function MyPageWishList() {
  const results = useSuspenseQueries({
    queries: [
      { queryKey: ['wishlist', 'trip'], queryFn: getTripStores },
      { queryKey: ['wishlist', 'city'], queryFn: getCityStores },
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
    postImg: 'https://source.unsplash.com/random',
    bookmark: 0,
    postTitle: item.name,
  }));

  return (
    <div>
      <SubTitle
        variant="more"
        margin="1rem"
        onClickButton={() => onClickMore('trip')}>
        보관 여행 후기
      </SubTitle>
      <Spots creator={trip} sort="center" isDelete />
      <SubTitle
        variant="more"
        margin="1rem"
        onClickButton={() => onClickMore('city')}>
        보관 도시
      </SubTitle>
      <Spots creator={city} sort="left" isDelete />
      <SubTitle
        variant="more"
        margin="1rem"
        onClickButton={() => onClickMore('location')}>
        보관 여행지
      </SubTitle>
      <Spots creator={places} sort="space" isDelete />
    </div>
  );
}

export default MyPageWishList;
