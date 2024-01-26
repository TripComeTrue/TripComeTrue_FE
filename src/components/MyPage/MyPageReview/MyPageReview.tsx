import { useState } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Alert, Snackbar } from '@mui/material';
import useModal from '@/hooks/common/useModal';
import { SelectModal, Share } from '@/components/common';
import {
  ShareKakaoIcon,
  ShareLinkIcon,
} from '@/components/common/Share/Share.styles';
import MyPageReviewWrap from './MyPageReview.styles';
import MyPageReviewItem from './MyPageReviewItem';
import { getMyReview } from '@/apis/mypage';
import MyPageItemNone from '../MyPageItemNone/MyPageItemNone';
import { TripRecordContent } from '@/@types/mypage.types';
import { copyClipboard } from '@/utils/copyClipboard';
import useKakaoShare from '@/hooks/common/useKakaoShare';

function MyPageReview() {
  const [success, setSuccess] = useState(false);
  const { open, handleOpen, handleClose } = useModal();
  const { data, isLoading } = useSuspenseQuery({
    queryKey: ['mypage/review'],
    queryFn: getMyReview,
  });
  const [selectedReview, setSelectedReview] = useState<TripRecordContent>();

  // 카카오톡 공유
  const { handleKakaoShare } = useKakaoShare({
    thumb: selectedReview?.imageUrl,
    title: selectedReview?.title ?? '',
    desc: selectedReview?.countries ?? '',
    link: `trip/${selectedReview?.tripRecordId}`,
  });

  const onClickKakaoShare = () => {
    handleClose();
    handleKakaoShare();
  };

  const onClickLinkCopy = () => {
    const BASE_URL = 'https://tripcometrue.vercel.app/';
    if (selectedReview) {
      copyClipboard(`${BASE_URL}trip/${selectedReview.tripRecordId}`);
    }
    handleClose();
    setSuccess(true);
  };
  const onClickAlertClose = () => {
    setSuccess(false);
  };
  if (isLoading) return null;

  return (
    <>
      {data?.data.content.length === 0 && <MyPageItemNone />}
      <MyPageReviewWrap>
        {data?.data.content.map((review) => (
          <MyPageReviewItem
            key={review.tripRecordId}
            review={review}
            onOpenShare={handleOpen}
            setReviewItem={setSelectedReview}
          />
        ))}
      </MyPageReviewWrap>
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
    </>
  );
}

export default MyPageReview;
