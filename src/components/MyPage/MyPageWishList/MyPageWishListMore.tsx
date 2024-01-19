import { useQuery } from '@tanstack/react-query';
import { getWishListMore } from '@/apis/mypage';
import { MyPageWishListMoreProps } from './MyPageWishListMore.types';
import SpotsSwiper from '@/components/common/Spots/SpotsSwiper';
import { WISH_SORT } from '@/constants/MyPage/wishName';
import MyPageWishListMoreWrap from './MyPageWishListMore.styles';

function MyPageWishListMore({ type }: MyPageWishListMoreProps) {
  const sort = WISH_SORT[type] as 'left' | 'center' | 'space';
  const { data, isLoading } = useQuery({
    queryKey: [`mypage/wishlist/${type}`],
    queryFn: () => getWishListMore(type),
  });
  const onDelete = () => {};

  if (isLoading) return null;
  return (
    <MyPageWishListMoreWrap>
      {data?.data.map((item) => (
        <div key={item.postTitle}>
          <SpotsSwiper
            postImg={item.postImg}
            postTitle={item.postTitle}
            bookmark={item.bookmark}
            reviews={item?.reviews}
            sort={sort}
            fontSize={14}
            isDelete
            onDelete={onDelete}
          />
        </div>
      ))}
    </MyPageWishListMoreWrap>
  );
}

export default MyPageWishListMore;
