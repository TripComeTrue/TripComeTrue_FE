import { Link } from 'react-router-dom';
import * as Styled from './SignInTitle.styles';

function SignInTitle() {
  return (
    <>
      <Styled.SignInTourWrap>
        <Link to="/home">구경하기</Link>
      </Styled.SignInTourWrap>
      <Styled.SignInTitleH2>
        꿈에 그리던 <br />
        여행이 <br />
        현실이 되는 순간
      </Styled.SignInTitleH2>
      <Styled.SignInTitleH1>트립컴트루</Styled.SignInTitleH1>
    </>
  );
}

export default SignInTitle;
