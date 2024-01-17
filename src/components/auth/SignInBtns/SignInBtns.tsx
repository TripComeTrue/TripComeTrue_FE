import * as Styled from './SignInBtns.styles';

function SignInBtns() {
  return (
    <Styled.SignInBtnsWrap>
      <Styled.SignInBtnGoogle to="http://tripcometrue.site/oauth2/authorization/google">
        <Styled.SignInBtnIcon icon="google" />
        구글로 시작하기
      </Styled.SignInBtnGoogle>
      <Styled.SignInBtnNaver to="http://tripcometrue.site/oauth2/authorization/naver">
        <Styled.SignInBtnIcon icon="naver" />
        네이버로 시작하기
      </Styled.SignInBtnNaver>
      <Styled.SignInBtnKakao to="http://tripcometrue.site/oauth2/authorization/kakao">
        <Styled.SignInBtnIcon icon="kakao" />
        카카오로 시작하기
      </Styled.SignInBtnKakao>
      <Styled.SignInBtnEmail to="/auth/signin-email">
        이메일로 시작하기 <Styled.SignInBtnRight />
      </Styled.SignInBtnEmail>
    </Styled.SignInBtnsWrap>
  );
}

export default SignInBtns;
