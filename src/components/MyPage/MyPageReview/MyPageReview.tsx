import { useSuspenseQuery } from '@tanstack/react-query';
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

function MyPageReview() {
  const { open, handleOpen, handleClose } = useModal();
  const { data, isLoading } = useSuspenseQuery({
    queryKey: ['mypage/review'],
    queryFn: getMyReview,
  });
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
          />
        ))}
      </MyPageReviewWrap>
      <SelectModal open={open} onClose={handleClose} title="공유하기">
        <Share icon={<ShareKakaoIcon />}>카카오톡으로 공유하기</Share>
        <Share icon={<ShareLinkIcon />}>링크 복사하기</Share>
      </SelectModal>
    </>
  );
}

export default MyPageReview;
