import { ReactNode } from 'react';
import backArrowWhite from '/backArrowWhite.svg';
import starIcon from '/starIcon.svg';
import * as Styled from './ShortsNav.styles';

function ShortsNav({
  children,
  onClickBackBtn,
}: {
  children: ReactNode;
  onClickBackBtn: VoidFunction;
}) {
  const handleClickBackBtn = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // 이벤트 전파 막기
    onClickBackBtn();
  };
  return (
    <Styled.NavWrap>
      <Styled.NavIconBox onClick={handleClickBackBtn}>
        <img src={backArrowWhite} alt="뒤로가기" />
      </Styled.NavIconBox>
      <Styled.NavTitleBox>
        <Styled.NavIconBox>
          <img src={starIcon} alt="별 아이콘" />
        </Styled.NavIconBox>
        <Styled.NavTitle>{children}</Styled.NavTitle>
      </Styled.NavTitleBox>
    </Styled.NavWrap>
  );
}

export default ShortsNav;
