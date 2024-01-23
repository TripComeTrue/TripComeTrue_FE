/* eslint-disable no-console */
import { useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import AvatarEditor from 'react-avatar-editor';
import { Slider } from '@mui/material';
import { isAxiosError } from 'axios';
import { MyPageEditProfile } from '@/components/MyPage';
import MyPageContainer from '@/components/MyPage/MyPageLayout/MyPageLayout.styles';
import { Modal, SimpleNav } from '@/components/common';
import useModal from '@/hooks/common/useModal';
import { deleteImages, postImages } from '@/apis/images';
import { getMemberDetail, patchProfileImage } from '@/apis/mypage';

function EditProfile() {
  const { data: memberData, refetch } = useQuery({
    queryKey: ['member/detail'],
    queryFn: getMemberDetail,
  });
  const editor = useRef<AvatarEditor>(null);
  const { open, handleOpen, handleClose } = useModal();
  const [image, setImage] = useState<string>();
  const [slideValue, setSlideValue] = useState(10);
  // 확인 버튼을 누르면 할일
  const onClickSave = async () => {
    try {
      if (editor.current) {
        const dataUrl = editor.current.getImage().toDataURL();
        const res = await fetch(dataUrl);
        const blob = await res.blob();

        // 새로운 프로필 이미지 업로드
        const formData = new FormData();
        formData.append('file', blob);
        const { imageUrl } = await postImages(formData);
        const { data } = await patchProfileImage(imageUrl);
        setImage(data.profileImageUrl);
        // 이전 프로필 이미지는 삭제
        if (memberData)
          formData.append('imageUrl', memberData?.data.profileImage);
        await deleteImages(formData);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error);
      }
    }

    handleClose();
  };
  const onClickReset = () => {
    if (memberData) setImage(memberData?.data.profileImage);
    handleClose();
  };
  const handleChangeSlider = (_: Event, newValue: number | number[]) => {
    setSlideValue(newValue as number);
  };

  if (!memberData) return null;
  return (
    <>
      <SimpleNav>계정관리</SimpleNav>
      <MyPageContainer>
        <MyPageEditProfile
          data={memberData.data}
          refetch={refetch}
          handleOpen={handleOpen}
          image={image}
          setImage={setImage}
        />
      </MyPageContainer>
      <Modal
        dialog
        open={open}
        onClose={handleClose}
        onReset={onClickReset}
        onConfirm={onClickSave}>
        <AvatarEditor
          ref={editor}
          image={image ?? 'https://i.imgur.com/PWZeQcP.png'}
          width={240}
          height={240}
          border={10}
          color={[255, 255, 255, 0.6]} // RGBA
          scale={slideValue / 10}
          rotate={0}
        />
        <Slider
          min={10}
          max={50}
          sx={{
            margin: '0 auto',
            width: '80%',
          }}
          size="medium"
          defaultValue={slideValue}
          value={slideValue}
          onChange={handleChangeSlider}
        />
      </Modal>
    </>
  );
}

export default EditProfile;
