import { SpotsSkeleton, SubTitle } from '@/components/common';

function MyPageWishListSkeleton() {
  return (
    <div>
      <SubTitle margin="1rem">보관 여행 후기</SubTitle>
      <SpotsSkeleton />
      <SubTitle margin="1rem">보관 도시</SubTitle>
      <SpotsSkeleton />
      <SubTitle margin="1rem">보관 여행지</SubTitle>
      <SpotsSkeleton />
    </div>
  );
}

export default MyPageWishListSkeleton;
