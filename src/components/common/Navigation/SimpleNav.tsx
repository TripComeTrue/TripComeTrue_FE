import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './SimpleNav.styles';

function SimpleNav({ children }: { children?: ReactNode }) {
  const navigate = useNavigate();
  const onClickBackBtn = () => {
    navigate(-1);
  };

  return (
    <Styled.NavWrap>
      <Styled.NavInner>
        <Styled.NavBackBtn onClick={onClickBackBtn}>
          <img src="/images/back-arrow.svg" alt="뒤로가기" />
        </Styled.NavBackBtn>
        <Styled.NavTitle>{children}</Styled.NavTitle>
        <Styled.NavRightBtns />
      </Styled.NavInner>
    </Styled.NavWrap>
  );
}

SimpleNav.defaultProps = {
  children: '',
};

export default SimpleNav;
