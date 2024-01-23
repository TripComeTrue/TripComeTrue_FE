import { IoFileTray } from 'react-icons/io5';
import { Text } from '@/components/common';
import ItemNoneWrap from './MyPageItemNone.styles';

function MyPageItemNone() {
  return (
    <ItemNoneWrap>
      <Text fontSize={50} color="gray">
        <IoFileTray />
      </Text>
      <Text tag="h3" fontSize={14} fontWeight={700}>
        항목이 없습니다.
      </Text>
    </ItemNoneWrap>
  );
}

export default MyPageItemNone;
