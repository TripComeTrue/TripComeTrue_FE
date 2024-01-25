import { TripPlanSelectItemProps } from './TripPlanSelectItem.types';
import * as Styled from './TripPlanSelectItem.styles';
import { Text } from '@/components/common';
import calcDateDiff from '@/utils/dateDiff';

function TripPlanSelectItem({
  plan,
  selectedId,
  setSelectedId,
}: TripPlanSelectItemProps) {
  const onClickPlanSelect = () => {
    setSelectedId(plan.id);
  };
  return (
    <Styled.PlanItemWrap
      $select={`${plan.id === selectedId}`}
      onClick={onClickPlanSelect}>
      <div>
        <Text tag="h4" fontSize={14}>
          {plan.countries} 여행
        </Text>
        <Text tag="p" fontSize={12}>
          {plan.placesVisited.join(',')}
        </Text>
        <Styled.PlanDate>
          {plan.tripStartDay} ~ {plan.tripEndDay}
          <Styled.PlanDateDiff>
            {`${
              calcDateDiff(plan.tripStartDay, plan.tripEndDay) - 1
            }박 ${calcDateDiff(plan.tripStartDay, plan.tripEndDay)}일`}
          </Styled.PlanDateDiff>
        </Styled.PlanDate>
      </div>
    </Styled.PlanItemWrap>
  );
}

export default TripPlanSelectItem;
