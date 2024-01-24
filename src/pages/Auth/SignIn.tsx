import { useState } from 'react';
import {
  OnBoarding,
  SignInBtns,
  SignInLogo,
  SignInTitle,
} from '@/components/auth';
import Container from '@/components/common/Container';
import useLoginCheck from '@/hooks/Auth/useLoginCheck';

function SignIn() {
  useLoginCheck();
  const onboarding = localStorage.getItem('onboarding');
  if (!onboarding) localStorage.setItem('onboarding', 'true');
  const [isOnboarding, setIsOnboarding] = useState<string | null>(onboarding);

  const onCloseOnboarding = () => {
    setIsOnboarding('false');
    localStorage.setItem('onboarding', 'false');
  };

  if (isOnboarding && JSON.parse(isOnboarding))
    return <OnBoarding onCloseOnboarding={onCloseOnboarding} />;
  return (
    <Container>
      <SignInTitle />
      <SignInBtns />
      <SignInLogo />
    </Container>
  );
}

export default SignIn;
