import { PlanContent } from '@/@types/mypage.types';

export interface TripPlanSelectItemProps {
  plan: PlanContent;
  selectedId: number | undefined;
  setSelectedId: React.Dispatch<React.SetStateAction<number | undefined>>;
}
