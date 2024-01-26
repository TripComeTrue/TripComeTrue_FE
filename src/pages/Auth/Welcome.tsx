import { Link, useNavigate } from 'react-router-dom';
import Container from '@/components/common/Container';
import * as SignInStyled from '@/components/auth/SignInTitle/SignInTitle.styles';
import { WelcomeContent } from '@/components/auth';
import { Button } from '@/components/common';

function Welcome() {
  const navigate = useNavigate();
  const onClickNext = () => {
    navigate('/mypage');
  };
  return (
    <Container>
      <SignInStyled.SignInTourWrap>
        <Link to="/home">건너뛰기</Link>
      </SignInStyled.SignInTourWrap>
      <WelcomeContent />
      <Button type="button" size="lg" variants="primary" onClick={onClickNext}>
        내 트립포인트 확인하러 가기
      </Button>
    </Container>
  );
}

export default Welcome;
