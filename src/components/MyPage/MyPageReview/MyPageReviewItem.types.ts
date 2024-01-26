import { TripRecordContent } from '@/@types/mypage.types';

export interface MyPageReviewItemProps {
  review: TripRecordContent;
  onOpenDel: VoidFunction;
  onOpenShare: VoidFunction;
  setReviewItem: (review: TripRecordContent | undefined) => void;
}
