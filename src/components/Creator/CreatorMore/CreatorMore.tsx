import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CreatorProfile from '../CreatorProfile/CreatorProfile';
import exampleImg from '/domestic1.jpg';

export interface CreatorData {
  userImg: string;
  username: string;
  userInfo: string;
  rate?: number;
  userId: string;
  review: number;
  shorts: number;
}

const CreatorTop = styled.div`
  margin-bottom: 1rem;
  width: 100%;

  display: grid;
  grid-template-columns: 0.7fr 1.3fr;

  padding: 0.56rem 1.25rem 0.56rem 1rem;

  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  svg {
    cursor: pointer;
  }
`;

const CreatorMore = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
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
      <CreatorTop>
        <IoIosArrowBack
          onClick={handleGoBack}
          style={{ fontSize: 20, marginRight: 8 }}
        />
        크리에이터 더보기
      </CreatorTop>

      <div>
        <CreatorProfile data={CreatorDatas} />
        <CreatorProfile data={CreatorDatas} />
        <CreatorProfile data={CreatorDatas} />
      </div>
    </>
  );
};

export default CreatorMore;
