import { Text } from '@/components/common';
import { MyPagePlanItemProps } from './MyPagePlanItem.types';
import MyPagePopMenu from '../MyPagePopMenu/MyPagePopMenu';
import * as Styled from './MyPagePlanItem.styles';

function MyPagePlanItem({ plan, onOpenShare }: MyPagePlanItemProps) {
  return (
    <Styled.MyPagePlanItemWrap>
      <div>
        <Text tag="h4" fontSize={14}>
          {plan?.countries} 여행
        </Text>
        <Text tag="p" fontSize={12}>
          {plan?.placesVisited.join(',')}
        </Text>
        <Styled.MyPagePlanDate>
          {plan?.tripStartDay} ~ {plan?.tripEndDay}
        </Styled.MyPagePlanDate>
      </div>
      <div>
        <MyPagePopMenu onOpenShare={onOpenShare} />
      </div>
    </Styled.MyPagePlanItemWrap>
  );
}

export default MyPagePlanItem;