import { Link, useNavigate } from 'react-router-dom';
import * as Styled from './TripPlanFooter.styles';
import { Button } from '@/components/common';

const TripPlanFooter = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Styled.ButtonContainer>
      <Button variants="gray-border" size="lg" rounded="sm" onClick={goBack}>
        이전
      </Button>
      <Button variants="gray" size="lg" rounded="sm">
        <Link to="/trip/country">다음</Link>
      </Button>
    </Styled.ButtonContainer>
  );
};

export default TripPlanFooter;
