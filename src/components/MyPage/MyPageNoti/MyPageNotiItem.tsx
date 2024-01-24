import { Text } from '@/components/common';
import { MyPageNotiItemProps } from './MyPageNotiItem.types';
import * as Styled from './MyPageNotiItem.styles';
import MyPageNotiIcon from './MyPageNotiIcon';

function MyPageNotiItem({ noti }: MyPageNotiItemProps) {
  return (
    <Styled.MyPageNotiItemWrap>
      <Styled.MyPageNotiIconWrap $read={`${noti.read}`}>
        <MyPageNotiIcon />
      </Styled.MyPageNotiIconWrap>
      <div>
        <Text tag="p" fontSize={12} fontWeight={600}>
          {noti.title}
        </Text>
        {noti.text && (
          <Text fontSize={12} color="gray">
            {noti.text}
          </Text>
        )}
        <Text tag="p" fontSize={10} color="gray">
          {noti.time}
        </Text>
      </div>
    </Styled.MyPageNotiItemWrap>
  );
}

export default MyPageNotiItem;
