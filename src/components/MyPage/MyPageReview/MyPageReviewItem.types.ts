import { TripRecordContent } from '@/@types/mypage.types';

export interface MyPageReviewItemProps {
  review: TripRecordContent;
  onOpenShare: () => void;
  setReviewItem: (review: TripRecordContent | undefined) => void;
}
