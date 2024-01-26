/* eslint-disable no-console */
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import AvatarEditor from 'react-avatar-editor';
import { Slider } from '@mui/material';
import { isAxiosError } from 'axios';
import { MyPageEditProfile } from '@/components/MyPage';
import MyPageContainer from '@/components/MyPage/MyPageLayout/MyPageLayout.styles';
import { Modal, SimpleNav, Text } from '@/components/common';
import useModal from '@/hooks/common/useModal';
import { deleteImages, postImages } from '@/apis/images';
import {
  deleteMember,
  getMemberDetail,
  patchProfileImage,
} from '@/apis/mypage';
import { setCookie } from '@/utils/cookie';

function EditProfile() {
  const navigate = useNavigate();
  const { data: memberData, refetch } = useQuery({
    queryKey: ['member/detail'],
    queryFn: getMemberDetail,
  });
  const editor = useRef<AvatarEditor>(null);
  const { open, handleOpen, handleClose } = useModal();
  const {
    open: deleteOpen,
    handleOpen: handleDeleteOpen,
    handleClose: handleDeleteClose,
  } = useModal();
  // 회원탈퇴 mutation
  const mutation = useMutation({
    mutationKey: ['member', 'delete'],
    mutationFn: deleteMember,
    onSuccess: () => {
      setCookie('accessToken', '', 0);
      navigate('/');
    },
  });
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
  // 회원 탈퇴 api 호출 함수
  const handleDeleteMember = async () => {
    mutation.mutate();
    handleDeleteClose();
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
          handleDeleteOpen={handleDeleteOpen}
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
      <Modal
        type="info"
        dialog
        open={deleteOpen}
        onClose={handleDeleteMember}
        onReset={handleDeleteClose}>
        <Text fontSize={14} fontWeight={600}>
          회원 탈퇴시 <br />
          작성하신 모든 게시글/댓글이 <br />
          삭제되며 복구는 불가능합니다. <br />
          그래도 탈퇴 하시겠습니까?
        </Text>
      </Modal>
    </>
  );
}

export default EditProfile;
