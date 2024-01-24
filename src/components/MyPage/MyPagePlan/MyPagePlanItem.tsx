import { Text } from '@/components/common';
import { MyPagePlanItemProps } from './MyPagePlanItem.types';
import MyPagePopMenu from '../MyPagePopMenu/MyPagePopMenu';
import * as Styled from './MyPagePlanItem.styles';

function MyPagePlanItem({ plan, onOpenShare }: MyPagePlanItemProps) {
  return (
    <Styled.MyPagePlanItemWrap>
      <div>
        <Text tag="h4" fontSize={14}>
          {plan?.title}
        </Text>
        <Text tag="p" fontSize={12}>
          {plan?.location}
        </Text>
        <Styled.MyPagePlanDate>{plan?.date}</Styled.MyPagePlanDate>
      </div>
      <div>
        <MyPagePopMenu onOpenShare={onOpenShare} />
      </div>
    </Styled.MyPagePlanItemWrap>
  );
}

export default MyPagePlanItem;
