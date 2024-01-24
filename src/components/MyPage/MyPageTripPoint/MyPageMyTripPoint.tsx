import { Avatar, Text } from '@/components/common';
import * as Styled from './MyPageMyTripPoint.styles';

function MyPageMyTripPoint() {
  return (
    <Styled.MyTripPointBorder>
      <Styled.MyTripPointInner>
        <Styled.MyTripPointProfileWrap>
          <Avatar src="/busan.jpeg" size={38} />
          <Text fontWeight={600} fontSize={16}>
            룰루랄라
          </Text>
        </Styled.MyTripPointProfileWrap>
        <Text tag="p" fontSize={12} fontWeight={600} color="gray">
          보유 포인트
        </Text>
        <Text tag="p" fontSize={14} fontWeight={700}>
          50p
        </Text>
        <Styled.MyTripPointProgressBg>
          <Styled.MyTripPointProgress $percent="25%" />
        </Styled.MyTripPointProgressBg>
        <Styled.MyTripPointProgressText>
          <Text fontSize={12} fontWeight={600} color="gray">
            0p
          </Text>
          <Text fontSize={12} fontWeight={600} color="gray">
            러너까지 150p
          </Text>
        </Styled.MyTripPointProgressText>
      </Styled.MyTripPointInner>
    </Styled.MyTripPointBorder>
  );
}

export default MyPageMyTripPoint;
