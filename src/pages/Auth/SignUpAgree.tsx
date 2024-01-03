import SimpleNav from '@/components/common/Navigation/SimpleNav';
import Container from '@/components/common/Container';
import { SignUpAgreeChk, SignUpAgreeTitle } from '@/components/auth';

function SignUpAgree() {
  return (
    <>
      <SimpleNav />
      <Container>
        <SignUpAgreeTitle />
        <SignUpAgreeChk />
      </Container>
    </>
  );
}

export default SignUpAgree;
