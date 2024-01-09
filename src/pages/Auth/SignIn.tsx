import { SignInBtns, SignInLogo, SignInTitle } from '@/components/auth';
import Container from '@/components/common/Container';
import useLoginCheck from '@/hooks/Auth/useLoginCheck';

function SignIn() {
  useLoginCheck();

  return (
    <Container>
      <SignInTitle />
      <SignInBtns />
      <SignInLogo />
    </Container>
  );
}

export default SignIn;
