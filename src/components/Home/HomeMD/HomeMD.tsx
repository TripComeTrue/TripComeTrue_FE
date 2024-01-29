import { SubTitle } from '@/components/common';
import snowIcon from '/snow.svg';
import runningIcon from '/running.svg';
import treeIcon from '/tree.svg';
import * as Styled from './HomeMD.styles';

const HomeMD = () => {
  return (
    <Styled.HomeMDComponent>
      <Styled.HomeMDWrap>
        <SubTitle margin="1rem" fontSize={18} icon={snowIcon}>
          낭만 있는 프랑스 겨울
        </SubTitle>
      </Styled.HomeMDWrap>
      <Styled.HomeMDWrap>
        <SubTitle
          margin="1rem"
          fontSize={18}
          icon={runningIcon}
          variant={undefined}
          onClickButton={undefined}>
          서울 이곳저곳 탐방하기
        </SubTitle>
      </Styled.HomeMDWrap>
      <Styled.HomeMDWrap>
        <SubTitle
          margin="1rem"
          fontSize={18}
          icon={treeIcon}
          variant={undefined}
          onClickButton={undefined}>
          추위를 피해 날아가는 철새처럼
        </SubTitle>
      </Styled.HomeMDWrap>
    </Styled.HomeMDComponent>
  );
};

export default HomeMD;
