import { Link } from 'react-router-dom';
import { Text } from '@/components/common';
import { MyPagePlanItemProps } from './MyPagePlanItem.types';
import MyPagePopMenu from '../MyPagePopMenu/MyPagePopMenu';
import * as Styled from './MyPagePlanItem.styles';
import calcDateDiff from '@/utils/dateDiff';

function MyPagePlanItem({
  plan,
  onOpenShare,
  setPlanItem,
}: MyPagePlanItemProps) {
  if (!plan) return null;
  return (
    <Styled.MyPagePlanItemWrap>
      <Link to={`/trip/tripPlan/view/${plan.id}`}>
        <Text tag="h4" fontSize={14}>
          {plan.countries} 여행
        </Text>
        <Text tag="p" fontSize={12}>
          {plan.placesVisited.join(',')}
        </Text>
        <Styled.MyPagePlanDate>
          {plan.tripStartDay} ~ {plan.tripEndDay}
          <Styled.MyPagePlanDateDiff>
            {`${
              calcDateDiff(plan.tripStartDay, plan.tripEndDay) - 1
            }박 ${calcDateDiff(plan.tripStartDay, plan.tripEndDay)}일`}
          </Styled.MyPagePlanDateDiff>
        </Styled.MyPagePlanDate>
      </Link>
      <div>
        <MyPagePopMenu
          onOpenShare={onOpenShare}
          plan={plan}
          setPlanItem={setPlanItem}
        />
      </div>
    </Styled.MyPagePlanItemWrap>
  );
}

export default MyPagePlanItem;
