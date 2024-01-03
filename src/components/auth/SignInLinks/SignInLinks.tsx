import * as S from './SignInLinks.styles';

function SignInLinks() {
  return (
    <S.SignInLinkWrap>
      <S.SignInLinkItem>
        <S.SignInLink to="/auth/findemail">아이디 찾기</S.SignInLink>
      </S.SignInLinkItem>
      <S.SignInLinkItem>
        <S.SignInLink to="/auth/findpw">비밀번호 찾기</S.SignInLink>
      </S.SignInLinkItem>
      <S.SignInLinkItem>
        <S.SignInLink to="/auth/agree">회원가입</S.SignInLink>
      </S.SignInLinkItem>
    </S.SignInLinkWrap>
  );
}

export default SignInLinks;
