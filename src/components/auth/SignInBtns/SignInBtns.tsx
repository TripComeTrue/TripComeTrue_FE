import * as S from './SignInBtns.styles';

function SignInBtns() {
  return (
    <S.SignInBtnsWrap>
      <S.SignInBtnGoogle>
        <S.SignInBtnIcon icon="google" />
        구글로 시작하기
      </S.SignInBtnGoogle>
      <S.SignInBtnNaver>
        <S.SignInBtnIcon icon="naver" />
        네이버로 시작하기
      </S.SignInBtnNaver>
      <S.SignInBtnKakao>
        <S.SignInBtnIcon icon="kakao" />
        카카오로 시작하기
      </S.SignInBtnKakao>
      <S.SignInBtnEmail to="/auth/signin-email">
        이메일로 시작하기 <S.SignInBtnRight />
      </S.SignInBtnEmail>
    </S.SignInBtnsWrap>
  );
}

export default SignInBtns;
