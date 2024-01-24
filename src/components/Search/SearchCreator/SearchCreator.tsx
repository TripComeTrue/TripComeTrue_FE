import { useNavigate } from 'react-router-dom';
import { Shorts, SubTitle } from '@/components/common';
import Creator from '@/components/common/Creator/Creator';
import { CreatorData, SwiperProps } from './SearchCreator.types';
import exampleImg from '/domestic1.jpg';
import * as Styled from './SearchCreator.styles';

const SearchCreator = () => {
  const navigate = useNavigate();

  const CreatorDatas: CreatorData = {
    userImg: exampleImg,
    username: '맥주덕후',
    userInfo: '독일에서  실감나는 유럽의 삶을 담고 있는 유럽의 맥주덕후입니다.',
    userId: 'user1',
    rate: 4.8,
    review: 18,
    shorts: 7,
  };

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
    <>
      <Styled.CreatorTitleWrap>
        <SubTitle
          fontSize={14}
          variant="more"
          onClickButton={() => navigate('/creator')}>
          크리에이터
        </SubTitle>
      </Styled.CreatorTitleWrap>

      <div>
        <Styled.CreatorContent>
          <Creator creator={CreatorDatas} starRate={4.6} />
        </Styled.CreatorContent>
        <Styled.CreatorContent>
          <Creator creator={CreatorDatas} starRate={4.8} />
        </Styled.CreatorContent>
        <Styled.CreatorContent>
          <Creator creator={CreatorDatas} starRate={2.2} />
        </Styled.CreatorContent>
      </div>

      <div>
        <Styled.CreatorTitle>
          검색된 크리에이터가 업로드한 쇼츠
        </Styled.CreatorTitle>
        <Shorts slides={slideShorts.전체} slidesPerView={2.1} />
      </div>

      {/* <div>
        <Styled.CreatorReview>
          검색된 크리에이터가 작성한 여행 후기
        </Styled.CreatorReview>
      </div> */}
    </>
  );
};

export default SearchCreator;
