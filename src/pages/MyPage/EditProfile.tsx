import { useRef, useState } from 'react';
import AvatarEditor from 'react-avatar-editor';
import { MyPageEditProfile } from '@/components/MyPage';
import MyPageContainer from '@/components/MyPage/MyPageLayout/MyPageLayout.styles';
import { Modal, SimpleNav } from '@/components/common';
import useModal from '@/hooks/common/useModal';

function EditProfile() {
  const { open, handleOpen, handleClose } = useModal();
  const editor = useRef<AvatarEditor>(null);
  const [image, setImage] = useState<string>();
  const onClickSave = () => {
    if (editor.current) {
      const dataUrl = editor.current.getImage().toDataURL();
      setImage(dataUrl);
    }
    handleClose();
  };
  return (
    <>
      <SimpleNav>계정관리</SimpleNav>
      <MyPageContainer>
        <MyPageEditProfile
          handleEditProfile={handleOpen}
          image={image}
          setImage={setImage}
        />
      </MyPageContainer>
      <Modal open={open} onClose={onClickSave}>
        <AvatarEditor
          ref={editor}
          image={image ?? 'https://i.imgur.com/PWZeQcP.png'}
          width={240}
          height={240}
          border={10}
          color={[255, 255, 255, 0.6]} // RGBA
          scale={1.2}
          rotate={0}
        />
      </Modal>
    </>
  );
}

export default EditProfile;
