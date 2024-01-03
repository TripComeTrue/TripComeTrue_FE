import SimpleNav from '@/components/common/Navigation/SimpleNav';
import Container from '@/components/common/Container';
import { SignInEmailForm, SignInLinks, SignInLogo } from '@/components/auth';

function SignInEmail() {
  return (
    <>
      <SimpleNav>이메일로 로그인</SimpleNav>
      <Container>
        <SignInLogo />
        <SignInEmailForm />
        <SignInLinks />
      </Container>
    </>
  );
}

export default SignInEmail;
