import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CreatorProfile from '../CreatorProfile/CreatorProfile';

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
        <CreatorProfile />
      </div>
    </>
  );
};

export default CreatorMore;
