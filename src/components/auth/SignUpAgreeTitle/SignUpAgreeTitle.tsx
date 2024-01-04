import { SignInTitleH2 } from '../SignInTitle/SignInTitle.styles';
import SignUpAgreeTitleWrap from './SignUpAgreeTitle.styles';

function SignUpAgreeTitle() {
  return (
    <SignUpAgreeTitleWrap>
      <SignInTitleH2>
        서비스 이용 약관을 <br />
        확인해 주세요.
      </SignInTitleH2>
    </SignUpAgreeTitleWrap>
  );
}

export default SignUpAgreeTitle;
