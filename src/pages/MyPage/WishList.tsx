import { Suspense } from 'react';
import { RetryErrorBoundary, SimpleNav } from '@/components/common';
import { MyPageWishList } from '@/components/MyPage';
import MyPageContainer from '@/components/MyPage/MyPageLayout/MyPageLayout.styles';

function WishList() {
  return (
    <>
      <SimpleNav>보관리스트</SimpleNav>
      <MyPageContainer>
        <RetryErrorBoundary>
          <Suspense fallback={<div>list loading...</div>}>
            <MyPageWishList />
          </Suspense>
        </RetryErrorBoundary>
      </MyPageContainer>
    </>
  );
}

export default WishList;
