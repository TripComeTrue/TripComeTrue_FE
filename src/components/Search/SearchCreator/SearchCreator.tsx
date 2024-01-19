import { SubTitle } from '@/components/common';
import Creator from '@/components/common/Creator/Creator';
import { CreatorData } from './SearchCreator.types';
import exampleImg from '/domestic1.jpg';

const SearchCreator = () => {
  const CreatorDatas: CreatorData = {
    userImg: exampleImg,
    username: '맥주덕후',
    userInfo:
      '독일에서 교환학생하며 실감나는 유럽의 삶을 담고 있는 유럽의 맥주덕후입니다.',
    userId: 'user1',
    rate: 4.8,
    review: 18,
    shorts: 7,
  };

  return (
    <div>
      <SubTitle fontSize={14} variant="more">
        도시
      </SubTitle>

      <Creator creator={CreatorDatas} starRate={4.8} />
      <Creator creator={CreatorDatas} starRate={4.8} />
      <Creator creator={CreatorDatas} starRate={4.8} />
    </div>
  );
};

export default SearchCreator;
