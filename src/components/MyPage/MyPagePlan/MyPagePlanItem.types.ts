import { PlanContent } from '@/@types/mypage.types';

export interface MyPagePlanItemProps {
  plan?: PlanContent;
  onOpenDel: VoidFunction;
  onOpenShare: VoidFunction;
  setPlanItem: (plan: PlanContent | undefined) => void;
}
