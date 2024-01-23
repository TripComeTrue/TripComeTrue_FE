import { Avatar, Text } from '@/components/common';
import * as Styled from './MyPageMyTripPoint.styles';
import { MyPageMyTripPointProps } from './MyPageMyTripPoint.types';
import { POINT_LEVEL } from '@/constants/MyPage/pointLevel';

function MyPageMyTripPoint({ data }: MyPageMyTripPointProps) {
  const pointLevel = POINT_LEVEL[data.tripLevel.toLowerCase()];
  return (
    <Styled.MyTripPointBorder>
      <Styled.MyTripPointInner>
        <Styled.MyTripPointProfileWrap>
          <Avatar src={data.profileImage} size={38} />
          <Text fontWeight={600} fontSize={16}>
            {data.nickname}
          </Text>
        </Styled.MyTripPointProfileWrap>
        <Text tag="p" fontSize={12} fontWeight={600} color="gray">
          보유 포인트
        </Text>
        <Text tag="p" fontSize={14} fontWeight={700}>
          {data.totalPoint}p
        </Text>
        <Styled.MyTripPointProgressBg>
          <Styled.MyTripPointProgress
            $percent={`${(data.totalPoint / (pointLevel.end + 1)) * 100}%`}
          />
        </Styled.MyTripPointProgressBg>
        <Styled.MyTripPointProgressText>
          <Text fontSize={12} fontWeight={600} color="gray">
            {pointLevel.start}p
          </Text>
          <Text fontSize={12} fontWeight={600} color="gray">
            {pointLevel.next === '최고레벨' ? '' : `${pointLevel.next}까지`}{' '}
            {pointLevel.end - data.totalPoint}p
          </Text>
        </Styled.MyTripPointProgressText>
      </Styled.MyTripPointInner>
    </Styled.MyTripPointBorder>
  );
}

export default MyPageMyTripPoint;
