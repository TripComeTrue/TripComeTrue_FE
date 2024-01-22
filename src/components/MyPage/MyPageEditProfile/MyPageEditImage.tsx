import { Avatar } from '@/components/common';
import * as Styled from './MyPageEditImage.styles';

function MyPageEditImage({ handleEditProfile }: MyPageEditImageProps) {
  return (
    <Styled.MyPageAvatarWrap>
      <Avatar src="/busan.jpeg" size={83} />
      <Styled.MyPageAvatarEditBtn
        size="sm"
        rounded="sm"
        variants="gray-border"
        type="button"
        onClick={handleEditProfile}>
        사진 편집
      </Styled.MyPageAvatarEditBtn>
    </Styled.MyPageAvatarWrap>
  );
}

export default MyPageEditImage;
