import { useState } from 'react';
import { SignInLogo, SignUpForm } from '@/components/auth';
import { Modal, Text } from '@/components/common';
import Container from '@/components/common/Container';
import SimpleNav from '@/components/common/Navigation/SimpleNav';
import { ModalTitle } from '@/components/auth/SignInModal/SignInModal.styles';

function SignUp() {
  const [open, setOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string>();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <SimpleNav>야놀자 통합 회원가입</SimpleNav>
      <Container>
        <SignInLogo />
        <SignUpForm handleOpen={handleOpen} setErrorMsg={setErrorMsg} />
      </Container>
      <Modal type="error" open={open} onClose={handleClose}>
        <ModalTitle id="modal-modal-title">회원가입 실패</ModalTitle>
        <Text>{errorMsg}</Text>
      </Modal>
    </>
  );
}

export default SignUp;
