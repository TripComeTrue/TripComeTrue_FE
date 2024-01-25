import { Suspense, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MyPageComment,
  MyPageNav,
  MyPagePlan,
  MyPagePlanSkeleton,
  MyPageReview,
  MyPageReviewSkeleton,
  MyPageTab,
  MyPageTopProfile,
  MyPageTopProfileSkeleton,
} from '@/components/MyPage';
import { TabName } from '@/components/MyPage/MyPageTab/MyPageTab.types';
import MyPageContainer from '@/components/MyPage/MyPageLayout/MyPageLayout.styles';
import { Modal, RetryErrorBoundary, Text } from '@/components/common';
import useModal from '@/hooks/common/useModal';
import { setCookie } from '@/utils/cookie';

function MyPage() {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState<TabName | string>(
    TabName.plan,
  );
  const { open, handleOpen, handleClose } = useModal();
  const onClickLogout = () => {
    setCookie('accessToken', '', 0);
    navigate('/');
    handleClose();
  };

  return (
    <>
      <MyPageNav />
      <MyPageContainer>
        <RetryErrorBoundary>
          <Suspense fallback={<MyPageTopProfileSkeleton />}>
            <MyPageTopProfile handleOpen={handleOpen} />
          </Suspense>
        </RetryErrorBoundary>
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
      <Modal
        type="info"
        dialog
        open={open}
        onClose={handleClose}
        onReset={handleClose}
        onConfirm={onClickLogout}>
        <Text fontSize={14} fontWeight={600}>
          로그아웃 하시겠습니까?
        </Text>
      </Modal>
    </>
  );
}

export default MyPage;
