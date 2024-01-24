import { MyTripPlan } from './MyPagePlan.types';

export interface MyPagePlanItemProps {
  plan?: MyTripPlan;
  onOpenShare: () => void;
}
