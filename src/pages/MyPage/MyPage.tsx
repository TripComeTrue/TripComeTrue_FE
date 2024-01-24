import { Suspense, useState } from 'react';
import {
  MyPageComment,
  MyPageNav,
  MyPagePlan,
  MyPageReview,
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
            <Suspense fallback={<h1>Loading plan item..</h1>}>
              <MyPagePlan />
            </Suspense>
          </RetryErrorBoundary>
        )}
        {selectedTab === TabName.review && (
          <RetryErrorBoundary>
            <Suspense fallback={<h1>Loading review item..</h1>}>
              <MyPageReview />
            </Suspense>
          </RetryErrorBoundary>
        )}
        {selectedTab === TabName.comment && (
          <RetryErrorBoundary>
            <Suspense fallback={<h1>Loading comment item..</h1>}>
              <MyPageComment />
            </Suspense>
          </RetryErrorBoundary>
        )}
      </MyPageContainer>
    </>
  );
}

export default MyPage;
