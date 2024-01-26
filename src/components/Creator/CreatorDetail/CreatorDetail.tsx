import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import CreatorProfile from '../CreatorProfile/CreatorProfile';
import exampleImg from '/domestic1.jpg';
import * as Styled from '../CreatorMore/CreatorMore.styles';
import { CreatorData } from '../CreatorMore/CreateMore.types';

const CreatorDetail = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const CreatorDatas: CreatorData = {
    profileImageUrl: exampleImg,
    nickname: '맥주덕후',
    introduction:
      '독일에서 교환학생하며 실감나는 유럽의 삶을 담고 있는 유럽의 맥주덕후입니다.',
    memberId: 1,
    averageRating: 4.8,
    tripRecordTotal: 18,
    videoTotal: 7,
  };

  return (
    <Styled.CreatorAllWrap>
      <Styled.CreatorTop>
        <IoIosArrowBack
          onClick={handleGoBack}
          style={{ fontSize: 20, marginRight: 8 }}
        />
        크리에이터 프로필
      </Styled.CreatorTop>

      <div>
        <CreatorProfile data={CreatorDatas} />
      </div>
    </Styled.CreatorAllWrap>
  );
};

export default CreatorDetail;
