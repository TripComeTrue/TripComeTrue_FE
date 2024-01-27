import { formatDistance } from 'date-fns';
import { ko } from 'date-fns/locale';
import { Text } from '@/components/common';
import { MyPageNotiItemProps } from './MyPageNotiItem.types';
import MyPageNotiIcon from './MyPageNotiIcon';
import { AlarmType } from '@/@types/mypage.types';
import * as Styled from './MyPageNotiItem.styles';

function MyPageNotiItem({ noti }: MyPageNotiItemProps) {
  // 주어진 날짜 date 형식으로 formating
  const dateString = noti.createdAt.split('T');
  const date = dateString[0];
  const time = dateString[1].replace(/-/gi, ':');

  // 얼마 전인지 구하기
  const distance = formatDistance(new Date(`${date}T${time}`), new Date(), {
    locale: ko,
  });

  return (
    <Styled.MyPageNotiItemWrap>
      <Styled.MyPageNotiIconWrap
        $read={`${noti.alarmType !== AlarmType.NEW_TRIP_RECORD_REVIEW}`}>
        <MyPageNotiIcon />
      </Styled.MyPageNotiIconWrap>
      <div>
        <Text tag="p" fontSize={12} fontWeight={600}>
          {noti.alarmArgs}
        </Text>
        {noti.fromMemberNickname && (
          <Text fontSize={12} color="gray">
            {noti.fromMemberNickname}
          </Text>
        )}
        <Text tag="p" fontSize={10} color="gray">
          {distance}
        </Text>
      </div>
    </Styled.MyPageNotiItemWrap>
  );
}

export default MyPageNotiItem;
