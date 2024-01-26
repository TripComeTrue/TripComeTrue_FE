import React, { useEffect, useState } from 'react';
import { useMutation, useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { Alert, Snackbar } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import MyPagePlanWrap from './MyPagePlan.styles';
import MyPagePlanItem from './MyPagePlanItem';
import { Modal, SelectModal, Share, Text } from '@/components/common';
import useModal from '@/hooks/common/useModal';
import {
  ShareKakaoIcon,
  ShareLinkIcon,
} from '@/components/common/Share/Share.styles';
import { deleteMyTripPlan, getMyPlan } from '@/apis/mypage';
import MyPageItemNone from '../MyPageItemNone/MyPageItemNone';
import { PlanContent } from '@/@types/mypage.types';
import { copyClipboard } from '@/utils/copyClipboard';
import useKakaoShare from '@/hooks/common/useKakaoShare';
import MyPagePlanSkeleton from './MyPagePlanSkeleton';

function MyPagePlan() {
  const { ref, inView } = useInView();
  const [success, setSuccess] = useState(false); // 링크 클립보드 복사 성공 여부
  const { open, handleOpen, handleClose } = useModal(); // 공유모달 열림 여부
  const {
    open: delOpen,
    handleOpen: handleDelOpen,
    handleClose: handleDelClose,
  } = useModal(); // 삭제 모달 열림 여부
  // 무한스크롤 Query 코드
  const { data, refetch, fetchNextPage, isFetchingNextPage } =
    useSuspenseInfiniteQuery({
      queryKey: ['mypage', 'plan'],
      queryFn: async ({ pageParam }) => getMyPlan(pageParam),
      initialPageParam: 0,
      getNextPageParam: (lastPage, _, lastPageParam) =>
        !lastPage.data.last ? lastPageParam + 1 : undefined,
    });
  const [selectedPlan, setSelectedPlan] = useState<PlanContent>();

  const delMutation = useMutation({
    mutationKey: ['mypage', 'plan', 'delete'],
    mutationFn: () => deleteMyTripPlan(selectedPlan?.id ?? 0),
  });

  // 삭제시 실행될 작업
  const onClickDel = async () => {
    const resCode = await delMutation.mutateAsync();
    if (resCode === 200) refetch();
    handleDelClose();
  };

  // 카카오톡 공유
  const { handleKakaoShare } = useKakaoShare({
    title: selectedPlan?.countries ?? '',
    desc: selectedPlan?.placesVisited.join(',') ?? '',
    link: `trip/tripPlan/view/${selectedPlan?.id}`,
  });

  // 카톡 공유 클릭시 함수
  const onClickKakaoShare = () => {
    handleClose();
    handleKakaoShare();
  };

  // 링크 복사 버튼 클릭시 함수
  const onClickLinkCopy = () => {
    const BASE_URL = 'https://tripcometrue.vercel.app/';
    if (selectedPlan) {
      copyClipboard(`${BASE_URL}trip/tripPlan/view/${selectedPlan.id}`);
    }
    handleClose();
    setSuccess(true);
  };
  const onClickAlertClose = () => {
    setSuccess(false);
  };

  // 스크롤 하단으로 이동시 다음페이지 페칭
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <div>
      {data?.pages[0].data.content.length === 0 && <MyPageItemNone />}
      <MyPagePlanWrap>
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page?.data.content.map((plan) => (
              <MyPagePlanItem
                key={plan.id}
                plan={plan}
                onOpenDel={handleDelOpen}
                onOpenShare={handleOpen}
                setPlanItem={setSelectedPlan}
              />
            ))}
          </React.Fragment>
        ))}
        {isFetchingNextPage && <MyPagePlanSkeleton />}
      </MyPagePlanWrap>
      <div ref={ref}>&nbsp;</div>
      {/* 삭제 모달 */}
      <Modal
        type="info"
        dialog
        open={delOpen}
        onClose={handleDelClose}
        onReset={handleDelClose}
        onConfirm={onClickDel}>
        <Text fontSize={14} fontWeight={600}>
          삭제된 내용은 복구할 수 없습니다.
          <br />
          삭제하시겠습니까?
        </Text>
      </Modal>
      {/* 공유 모달 */}
      <SelectModal open={open} onClose={handleClose} title="공유하기">
        <Share icon={<ShareKakaoIcon />} onClickShare={onClickKakaoShare}>
          카카오톡으로 공유하기
        </Share>
        <Share icon={<ShareLinkIcon />} onClickShare={onClickLinkCopy}>
          링크 복사하기
        </Share>
      </SelectModal>
      {/* 클립보드 toast 알림 */}
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={success}
        autoHideDuration={5000}
        onClose={onClickAlertClose}>
        <Alert
          onClose={onClickAlertClose}
          severity="success"
          sx={{ width: '100%' }}>
          클립보드에 복사되었습니다!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default MyPagePlan;
