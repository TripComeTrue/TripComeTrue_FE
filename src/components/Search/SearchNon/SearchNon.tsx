import { Shorts, Spots } from '@/components/common';
import SearchKeyword from '../SearchKeyword/SearchKeyword';
import domestic1 from '/domestic3.jpg';
import { HomeMDDataType, SwiperProps } from './SearchNon.types';
import * as Styled from './SearchNon.styles';

const SearchNon = () => {
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
        postTitle: '치앙마이 다녀왔어요!',
        postImg: domestic1,
        reviews: 23,
      },
      {
        bookmark: 231,
        postTitle: '태국 치앙마이 가볼만한',
        postImg: domestic1,
        reviews: 23,
      },
      {
        bookmark: 421,
        postTitle: '치앙마이 한달살기',
        postImg: domestic1,
        reviews: 23,
      },
    ],
  };

  return (
    <div>
      <Styled.SearchNonWrap>
        <span>&apos;치아아이이잉마이이잉&apos;</span>에 대한
        <br />
        검색 결과가 없습니다.
        <p>단어의 철자를 확인해주세요</p>
      </Styled.SearchNonWrap>

      <Styled.SearchShorts>쇼츠</Styled.SearchShorts>
      <Shorts slides={slideShorts.전체} slidesPerView={2.1} />

      <Styled.SearchReview>여행 후기</Styled.SearchReview>
      <Spots
        creator={HomeMDdata.france}
        slidesPerView={2.75}
        sort="center"
        fontSize={10}
      />

      <SearchKeyword />
    </div>
  );
};

export default SearchNon;
