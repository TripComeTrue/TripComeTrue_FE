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
        postTitle: '파리',
        postImg: franceImg,
        reviews: 23,
      },
      {
        bookmark: 231,
        postTitle: '보르도',
        postImg: franceImg,
        reviews: 23,
      },
      {
        bookmark: 421,
        postTitle: '니스',
        postImg: franceImg,
        reviews: 23,
      },
    ],
    seoul: [
      {
        bookmark: 231,
        postTitle: '고궁 투어',
        postImg: seoulImg,
      },
      {
        bookmark: 413,
        postTitle: '합당동 가봤어요',
        postImg: seoulImg,
      },
      {
        bookmark: 321,
        postTitle: '홍대',
        postImg: seoulImg,
      },
    ],
    southEast: [
      {
        bookmark: 231,
        postTitle: '방콕',
        postImg: danagImg,
      },
      {
        bookmark: 231,
        postTitle: '호치민',
        postImg: danagImg,
      },
      {
        bookmark: 231,
        postTitle: '다낭',
        postImg: danagImg,
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
