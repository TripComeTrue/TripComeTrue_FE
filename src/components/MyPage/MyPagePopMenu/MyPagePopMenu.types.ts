import { PlanContent, TripRecordContent } from '@/@types/mypage.types';

export interface MyPagePopMenuProps {
  vertical?: boolean;
  onOpenDel: VoidFunction;
  onOpenShare: VoidFunction;
  plan?: PlanContent;
  review?: TripRecordContent;
  setPlanItem?: (item: PlanContent | undefined) => void;
  setReviewItem?: (item: TripRecordContent | undefined) => void;
}
