import { useQuery } from '@tanstack/react-query';
import { getWishListMore } from '@/apis/mypage';
import { MyPageWishListMoreProps } from './MyPageWishListMore.types';
import SpotsSwiper from '@/components/common/Spots/SpotsSwiper';
import { WISH_SORT } from '@/constants/MyPage/wishName';
import MyPageWishListMoreWrap from './MyPageWishListMore.styles';
import { useWishDeleteMutation } from './MyPageWishList.utils';

function MyPageWishListMore({ type }: MyPageWishListMoreProps) {
  const sort = WISH_SORT[type] as 'left' | 'center' | 'space';
  const { data, isLoading } = useQuery({
    queryKey: ['wishlist', type, 'more'],
    queryFn: () => getWishListMore(type),
  });

  const mutation = useWishDeleteMutation();

  const onClickDelete = (val: string) => (id: number) => {
    mutation.mutate({ type: val, id });
  };

  if (isLoading) return null;
  return (
    <MyPageWishListMoreWrap>
      {data?.map((item) => (
        <div key={item.tripRecordTitle}>
          <SpotsSwiper
            imageUrl={item.imageUrl}
            tripRecordTitle={item.tripRecordTitle}
            storedCount={item.storedCount}
            reviews={item.reviews}
            sort={sort}
            fontSize={14}
            id={item.id}
            onDelete={onClickDelete(type)}
          />
        </div>
      ))}
    </MyPageWishListMoreWrap>
  );
}

export default MyPageWishListMore;
