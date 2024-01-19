import { SubTitle } from '@/components/common';
import Creator from '@/components/common/Creator/Creator';
import { CreatorData } from './SearchCreator.types';
import exampleImg from '/domestic1.jpg';
import * as Styled from './SearchCreator.styles';

const SearchCreator = () => {
  const CreatorDatas: CreatorData = {
    userImg: exampleImg,
    username: '맥주덕후',
    userInfo: '독일에서  실감나는 유럽의 삶을 담고 있는 유럽의 맥주덕후입니다.',
    userId: 'user1',
    rate: 4.8,
    review: 18,
    shorts: 7,
  };

  return (
    <>
      <Styled.CreatorTitleWrap>
        <SubTitle fontSize={14} variant="more">
          크리에이터
        </SubTitle>
      </Styled.CreatorTitleWrap>

      <Styled.CreatorContent>
        <Creator creator={CreatorDatas} starRate={4.6} />
      </Styled.CreatorContent>
      <Styled.CreatorContent>
        <Creator creator={CreatorDatas} starRate={4.8} />
      </Styled.CreatorContent>
      <Styled.CreatorContent>
        <Creator creator={CreatorDatas} starRate={2.2} />
      </Styled.CreatorContent>
    </>
  );
};

export default SearchCreator;
