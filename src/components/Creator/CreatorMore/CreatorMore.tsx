import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import CreatorProfile from '../CreatorProfile/CreatorProfile';
import exampleImg from '/domestic1.jpg';
import * as Styled from './CreatorMore.styles';
import { CreatorData } from './CreateMore.types';

const CreatorMore = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleClick = (prop: string): string => {
    navigate(`/creator/${prop}`);
    return prop;
  };

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
    <>
      <Styled.CreatorTop>
        <IoIosArrowBack
          onClick={handleGoBack}
          style={{ fontSize: 20, marginRight: 8 }}
        />
        크리에이터 더보기
      </Styled.CreatorTop>

      <Styled.CreatorAllWrap>
        <button
          aria-label="go to Details"
          type="button"
          onClick={() => handleClick(CreatorDatas.userId)}>
          <CreatorProfile data={CreatorDatas} />
        </button>
      </Styled.CreatorAllWrap>
    </>
  );
};

export default CreatorMore;
