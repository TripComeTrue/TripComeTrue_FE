import { MyTripReview } from './MyPageReview.types';

export interface MyPageReviewItemProps {
  review: MyTripReview;
  onOpenShare: () => void;
}
