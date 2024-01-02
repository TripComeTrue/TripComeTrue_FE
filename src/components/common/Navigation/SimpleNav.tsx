import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './SimpleNav.styles';

function SimpleNav({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const onClickBackBtn = () => {
    navigate(-1);
  };

  return (
    <S.NavWrap>
      <S.NavInner>
        <S.NavBackBtn onClick={onClickBackBtn}>
          <img src="/images/back-arrow.svg" alt="뒤로가기" />
        </S.NavBackBtn>
        <S.NavTitle>{children}</S.NavTitle>
        <S.NavRightBtns />
      </S.NavInner>
    </S.NavWrap>
  );
}

export default SimpleNav;
