import { SignInBtns, SignInFooter, SignInTitle } from '@/components/auth';
import Container from '@/components/common/Container';

function SignIn() {
  return (
    <Container>
      <SignInTitle />
      <SignInBtns />
      <SignInFooter />
    </Container>
  );
}

export default SignIn;
