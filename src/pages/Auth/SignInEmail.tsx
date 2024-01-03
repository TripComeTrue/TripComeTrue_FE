import SimpleNav from '@/components/common/Navigation/SimpleNav';
import { SignInEmailForm } from '@/components/auth';

function SignInEmail() {
  return (
    <>
      <SimpleNav>이메일로 로그인</SimpleNav>
      <SignInEmailForm />
    </>
  );
}

export default SignInEmail;
