import { Suspense, useState } from 'react';
import {
  MyPageComment,
  MyPageNav,
  MyPagePlan,
  MyPagePlanSkeleton,
  MyPageReview,
  MyPageReviewSkeleton,
  MyPageTab,
  MyPageTopProfile,
} from '@/components/MyPage';
import { TabName } from '@/components/MyPage/MyPageTab/MyPageTab.types';
import MyPageContainer from '@/components/MyPage/MyPageLayout/MyPageLayout.styles';
import { RetryErrorBoundary } from '@/components/common';

function MyPage() {
  const [selectedTab, setSelectedTab] = useState<TabName | string>(
    TabName.plan,
  );

  return (
    <>
      <MyPageNav />
      <MyPageContainer>
        <MyPageTopProfile />
        <MyPageTab tab={selectedTab} setTab={setSelectedTab} />
        {selectedTab === TabName.plan && (
          <RetryErrorBoundary>
            <Suspense fallback={<MyPagePlanSkeleton />}>
              <MyPagePlan />
            </Suspense>
          </RetryErrorBoundary>
        )}
        {selectedTab === TabName.review && (
          <RetryErrorBoundary>
            <Suspense fallback={<MyPageReviewSkeleton />}>
              <MyPageReview />
            </Suspense>
          </RetryErrorBoundary>
        )}
        {selectedTab === TabName.comment && <MyPageComment />}
      </MyPageContainer>
    </>
  );
}

export default MyPage;
