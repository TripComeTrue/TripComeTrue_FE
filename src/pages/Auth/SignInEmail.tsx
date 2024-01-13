import { useState } from 'react';
import SimpleNav from '@/components/common/Navigation/SimpleNav';
import Container from '@/components/common/Container';
import { SignInEmailForm, SignInLinks, SignInLogo } from '@/components/auth';
import { Modal, Text } from '@/components/common';

function SignInEmail() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <SimpleNav>이메일로 로그인</SimpleNav>
      <Container>
        <SignInLogo />
        <SignInEmailForm handleOpen={handleOpen} />
        <SignInLinks />
      </Container>
      <Modal type="error" open={open} onClose={handleClose} title="로그인 실패">
        <Text fontSize={14} fontWeight={600} color="gray">
          이메일 혹은 비밀번호 오류로 <br />
          로그인에 실패하였습니다.
        </Text>
      </Modal>
    </>
  );
}

export default SignInEmail;
