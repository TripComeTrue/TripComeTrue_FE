import { SignInBtns, SignInLogo, SignInTitle } from '@/components/auth';
import Container from '@/components/common/Container';

function SignIn() {
  return (
    <Container>
      <SignInTitle />
      <SignInBtns />
      <SignInLogo />
    </Container>
  );
}

export default SignIn;
