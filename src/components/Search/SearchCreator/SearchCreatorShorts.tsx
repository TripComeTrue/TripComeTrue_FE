import { Shorts } from '@/components/common';
import * as Styled from './SearchCreator.styles';
import { SwiperProps } from './SearchCreator.types';
import exampleImg from '/domestic1.jpg';

const SearchCreatorShorts = () => {
  const slideShorts: SwiperProps = {
    전체: [
      { img: exampleImg, title: '해외같은 제주 풀빌라', bookmark: 234 },
      { img: exampleImg, title: '스페인의 길거리', bookmark: 125 },
      { img: exampleImg, title: '서울 이색 데이트 추천!', bookmark: 88 },
      { img: exampleImg, title: '디즈니 성 몽생미셸', bookmark: 632 },
      { img: exampleImg, title: '추운 겨울의 글램핑', bookmark: 231 },
      { img: exampleImg, title: '일본 온천 여행', bookmark: 115 },
    ],
  };

  return (
    <div>
      <Styled.CreatorTitle>
        검색된 크리에이터가 업로드한 쇼츠
      </Styled.CreatorTitle>
      <Shorts slides={slideShorts.전체} slidesPerView={2.1} />
    </div>
  );
};

export default SearchCreatorShorts;
