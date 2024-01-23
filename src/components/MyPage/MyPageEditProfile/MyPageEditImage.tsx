import { ChangeEvent, useRef } from 'react';
import { Avatar } from '@/components/common';
import * as Styled from './MyPageEditImage.styles';

function MyPageEditImage({
  image,
  newImage,
  setImage,
  handleOpen,
}: MyPageEditImageProps) {
  const input = useRef<HTMLInputElement>(null);
  // handle Click
  const handleInputClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (input.current) input.current.click();
  };
  const handleEditProfile = async (e: ChangeEvent<HTMLInputElement>) => {
    handleOpen();
    if (e.target.files && e.target.files[0])
      setImage(URL.createObjectURL(e.target.files[0]));
    // 파일 초기화!
    if (input.current) input.current.value = '';
  };

  if (!image) return null;
  return (
    <Styled.MyPageAvatarWrap>
      <Avatar src={newImage || image} size={83} />
      <Styled.MyPageInputEl
        type="file"
        accept="image/*"
        ref={input}
        onChange={handleEditProfile}
      />
      <Styled.MyPageAvatarEditBtn
        size="sm"
        rounded="sm"
        variants="gray-border"
        type="button"
        onClick={handleInputClick}>
        사진 편집
      </Styled.MyPageAvatarEditBtn>
    </Styled.MyPageAvatarWrap>
  );
}

export default MyPageEditImage;
