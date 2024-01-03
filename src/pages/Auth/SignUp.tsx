import { SignInLogo, SignUpForm } from '@/components/auth';
import Container from '@/components/common/Container';
import SimpleNav from '@/components/common/Navigation/SimpleNav';

function SignUp() {
  return (
    <>
      <SimpleNav>야놀자 통합 회원가입</SimpleNav>
      <Container>
        <SignInLogo />
        <SignUpForm />
      </Container>
    </>
  );
}

export default SignUp;
