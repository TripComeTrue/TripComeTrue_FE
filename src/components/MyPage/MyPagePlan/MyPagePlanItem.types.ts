import { PlanContent } from '@/@types/mypage.types';

export interface MyPagePlanItemProps {
  plan?: PlanContent;
  onOpenShare: () => void;
  setPlanItem: (plan: PlanContent | undefined) => void;
}
