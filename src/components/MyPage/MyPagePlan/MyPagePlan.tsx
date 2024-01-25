import React, { useEffect, useState } from 'react';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { Alert, Snackbar } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import MyPagePlanWrap from './MyPagePlan.styles';
import MyPagePlanItem from './MyPagePlanItem';
import { SelectModal, Share } from '@/components/common';
import useModal from '@/hooks/common/useModal';
import {
  ShareKakaoIcon,
  ShareLinkIcon,
} from '@/components/common/Share/Share.styles';
import { getMyPlan } from '@/apis/mypage';
import MyPageItemNone from '../MyPageItemNone/MyPageItemNone';
import { PlanContent } from '@/@types/mypage.types';
import { copyClipboard } from '@/utils/copyClipboard';
import useKakaoShare from '@/hooks/common/useKakaoShare';
import MyPagePlanSkeleton from './MyPagePlanSkeleton';

function MyPagePlan() {
  const { ref, inView } = useInView();
  const [success, setSuccess] = useState(false);
  const { open, handleOpen, handleClose } = useModal();
  const { data, fetchNextPage, isFetchingNextPage } = useSuspenseInfiniteQuery({
    queryKey: ['mypage', 'plan'],
    queryFn: async ({ pageParam }) => getMyPlan(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) =>
      !lastPage.data.last ? lastPageParam + 1 : undefined,
  });
  const [selectedPlan, setSelectedPlan] = useState<PlanContent>();

  // 카카오톡 공유
  const { handleKakaoShare } = useKakaoShare({
    title: selectedPlan?.countries ?? '',
    desc: selectedPlan?.placesVisited.join(',') ?? '',
    link: `trip/tripPlan/view/${selectedPlan?.id}`,
  });

  const onClickKakaoShare = () => {
    handleClose();
    handleKakaoShare();
  };

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
                onOpenShare={handleOpen}
                setPlanItem={setSelectedPlan}
              />
            ))}
          </React.Fragment>
        ))}
        {isFetchingNextPage && <MyPagePlanSkeleton />}
      </MyPagePlanWrap>
      <div ref={ref}>&nbsp;</div>
      <SelectModal open={open} onClose={handleClose} title="공유하기">
        <Share icon={<ShareKakaoIcon />} onClickShare={onClickKakaoShare}>
          카카오톡으로 공유하기
        </Share>
        <Share icon={<ShareLinkIcon />} onClickShare={onClickLinkCopy}>
          링크 복사하기
        </Share>
      </SelectModal>
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
