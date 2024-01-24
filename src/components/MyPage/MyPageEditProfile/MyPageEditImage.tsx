import { Avatar } from '@/components/common';
import * as Styled from './MyPageEditImage.styles';

function MyPageEditImage() {
  return (
    <Styled.MyPageAvatarWrap>
      <Avatar src="/busan.jpeg" size={83} />
      <Styled.MyPageAvatarEditBtn
        size="sm"
        rounded="sm"
        variants="gray-border"
        type="button">
        사진 편집
      </Styled.MyPageAvatarEditBtn>
    </Styled.MyPageAvatarWrap>
  );
}

export default MyPageEditImage;
