import { Link } from 'react-router-dom';
import * as S from './SignInTitle.styles';

function SignInTitle() {
  return (
    <>
      <S.SignInTourWrap>
        <Link to="/home">구경하기</Link>
      </S.SignInTourWrap>
      <S.SignInTitleH2>
        꿈에 그리던 <br />
        여행이 <br />
        현실이 되는 순간
      </S.SignInTitleH2>
      <S.SignInTitleH1>트립컴트루</S.SignInTitleH1>
    </>
  );
}

export default SignInTitle;
