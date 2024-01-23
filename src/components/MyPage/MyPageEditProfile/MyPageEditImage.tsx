import { useRef } from 'react';
import { Avatar } from '@/components/common';
import * as Styled from './MyPageEditImage.styles';

function MyPageEditImage({
  image,
  newImage,
  setImage,
  handleEditProfile,
}: MyPageEditImageProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  // handle Click
  const handleInputClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (inputRef.current) inputRef.current.click();
  };
  // handle Change
  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0])
      setImage(URL.createObjectURL(e.target.files[0]));
    handleEditProfile();
  };

  if (!image) return null;
  return (
    <Styled.MyPageAvatarWrap>
      <Avatar src={newImage || image} size={83} />
      <Styled.MyPageInputEl
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImgChange}
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
