import { useState } from 'react';
import {
  MyPageComment,
  MyPageNav,
  MyPagePlan,
  MyPageReview,
  MyPageTab,
  MyPageTopProfile,
} from '@/components/MyPage';
import { TabName } from '@/components/MyPage/MyPageTab/MyPageTab.types';

function MyPage() {
  const [selectedTab, setSelectedTab] = useState<TabName | string>(
    TabName.plan,
  );

  return (
    <>
      <MyPageNav />
      <MyPageTopProfile />
      <MyPageTab tab={selectedTab} setTab={setSelectedTab} />
      {selectedTab === TabName.plan && <MyPagePlan />}
      {selectedTab === TabName.review && <MyPageReview />}
      {selectedTab === TabName.comment && <MyPageComment />}
    </>
  );
}

export default MyPage;
