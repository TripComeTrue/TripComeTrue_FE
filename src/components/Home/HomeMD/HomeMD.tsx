import { SubTitle } from '@/components/common';
import snowIcon from '/snow.svg';
import runningIcon from '/running.svg';
import treeIcon from '/tree.svg';
import HomeMDChoice from './HomeMDChoice';
import franceImg from '/overseas3.jpg';
import seoulImg from '/domestic3.jpg';
import danagImg from '/danag.png';
import { HomeMDData } from './HomeMD.types';
import * as Styled from './HomeMD.styles';

const HomeMD = () => {
  const HomeMDdata: HomeMDData = {
    france: [
      {
        bookmark: 123,
        city: '파리',
        cityImg: franceImg,
      },
      {
        bookmark: 231,
        city: '보르도',
        cityImg: franceImg,
      },
      {
        bookmark: 421,
        city: '니스',
        cityImg: franceImg,
      },
    ],
    seoul: [
      {
        bookmark: 231,
        city: '고궁 투어',
        cityImg: seoulImg,
      },
      {
        bookmark: 413,
        city: '합당동 가봤어요',
        cityImg: seoulImg,
      },
      {
        bookmark: 321,
        city: '홍대',
        cityImg: seoulImg,
      },
    ],
    southEast: [
      {
        bookmark: 231,
        city: '방콕',
        cityImg: danagImg,
      },
      {
        bookmark: 231,
        city: '호치민',
        cityImg: danagImg,
      },
      {
        bookmark: 231,
        city: '다낭',
        cityImg: danagImg,
      },
    ],
  };

  return (
    <Styled.HomeMDComponent>
      <Styled.HomeMDWrap>
        <SubTitle margin="1rem" fontSize={18} icon={snowIcon}>
          낭만 있는 프랑스 겨울
        </SubTitle>
        <HomeMDChoice city={HomeMDdata.france} />
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
        <HomeMDChoice city={HomeMDdata.seoul} />
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
        <HomeMDChoice city={HomeMDdata.southEast} />
      </Styled.HomeMDWrap>
    </Styled.HomeMDComponent>
  );
};

export default HomeMD;
