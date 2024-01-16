import styled from 'styled-components';
import { Shorts, Spots } from '@/components/common';
import domestic1 from '/domestic1.jpg';
import { SwiperProps, HomeMDDataType } from './CreatorInfo.types';

const CreatorInfoWrap = styled.div`
  margin-top: 1.8rem;
`;

const InfoSubtitle = styled.div`
  margin: 0 1rem 0;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const CreatorInfo = () => {
  const slideShorts: SwiperProps = {
    전체: [
      { img: domestic1, title: '해외같은 제주 풀빌라', bookmark: 234 },
      { img: domestic1, title: '스페인의 길거리', bookmark: 125 },
      { img: domestic1, title: '서울 이색 데이트 추천!', bookmark: 88 },
      { img: domestic1, title: '디즈니 성 몽생미셸', bookmark: 632 },
      { img: domestic1, title: '추운 겨울의 글램핑', bookmark: 231 },
      { img: domestic1, title: '일본 온천 여행', bookmark: 115 },
    ],
  };

  const HomeMDdata: HomeMDDataType = {
    france: [
      {
        bookmark: 123,
        postTitle: '파리',
        postImg: domestic1,
        reviews: 23,
      },
      {
        bookmark: 231,
        postTitle: '보르도',
        postImg: domestic1,
        reviews: 23,
      },
      {
        bookmark: 421,
        postTitle: '니스',
        postImg: domestic1,
        reviews: 23,
      },
    ],
  };

  return (
    <CreatorInfoWrap>
      <div>
        <InfoSubtitle>쇼츠</InfoSubtitle>
        <Shorts slides={slideShorts.전체} slidesPerView={2.1} />
      </div>

      <div>
        <InfoSubtitle>여정</InfoSubtitle>
        <Spots
          creator={HomeMDdata.france}
          slidesPerView={2.75}
          sort="left"
          fontSize={10}
        />
      </div>
    </CreatorInfoWrap>
  );
};

export default CreatorInfo;
