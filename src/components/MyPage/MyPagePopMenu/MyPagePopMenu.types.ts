import { PlanContent } from '@/@types/mypage.types';

export interface MyPagePopMenuProps {
  vertical?: boolean;
  onOpenShare: () => void;
  plan: PlanContent;
  setPlanItem: (planItem: PlanContent | undefined) => void;
}
