import * as Styled from './SignInBtns.styles';

function SignInBtns() {
  return (
    <Styled.SignInBtnsWrap>
      <Styled.SignInBtnGoogle>
        <Styled.SignInBtnIcon icon="google" />
        구글로 시작하기
      </Styled.SignInBtnGoogle>
      <Styled.SignInBtnNaver>
        <Styled.SignInBtnIcon icon="naver" />
        네이버로 시작하기
      </Styled.SignInBtnNaver>
      <Styled.SignInBtnKakao>
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
