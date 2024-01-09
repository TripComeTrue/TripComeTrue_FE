import * as Styled from './SignInLinks.styles';

function SignInLinks() {
  return (
    <Styled.SignInLinkWrap>
      {/* <Styled.SignInLinkItem>
        <Styled.SignInLink to="/auth/findemail">아이디 찾기</Styled.SignInLink>
      </Styled.SignInLinkItem>
      <Styled.SignInLinkItem>
        <Styled.SignInLink to="/auth/findpw">비밀번호 찾기</Styled.SignInLink>
      </Styled.SignInLinkItem> */}
      <Styled.SignInLinkItem>
        <Styled.SignInLink to="/auth/agree">
          야놀자 통합 회원가입
        </Styled.SignInLink>
      </Styled.SignInLinkItem>
    </Styled.SignInLinkWrap>
  );
}

export default SignInLinks;
