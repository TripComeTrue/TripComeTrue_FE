import { PlanContent, TripRecordContent } from '@/@types/mypage.types';

export interface MyPagePopMenuProps {
  vertical?: boolean;
  onOpenShare: () => void;
  plan?: PlanContent;
  review?: TripRecordContent;
  setPlanItem?: (item: PlanContent | undefined) => void;
  setReviewItem?: (item: TripRecordContent | undefined) => void;
}
