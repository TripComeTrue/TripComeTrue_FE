import { useLayoutEffect, useState } from 'react';
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
  const [isVisible, setIsVisible] = useState(true);

  // useEffect를 쓰면 화면이 깜빡여서 useLayoutEffect로 변경
  useLayoutEffect(() => {
    // localStorage에서 'onboarding' 키를 확인
    const onboarding = localStorage.getItem('onboarding');

    // 'onboarding' 키가 없을 경우(처음 방문한 경우)에만 setIsVisible을 true로 설정
    if (!onboarding) setIsVisible(true);
    // 'onboarding' 키가 있을 경우에는 setIsVisible을 false로 설정하여 숨김
    else setIsVisible(false);
  }, []);

  const onCloseOnboarding = () => {
    setIsVisible(false);
    localStorage.setItem('onboarding', 'hide');
  };

  if (isVisible) return <OnBoarding onCloseOnboarding={onCloseOnboarding} />;
  return (
    <Container>
      <SignInTitle />
      <SignInBtns />
      <SignInLogo />
    </Container>
  );
}

export default SignIn;
