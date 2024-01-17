import { Link, useNavigate } from 'react-router-dom';
import { SlArrowLeft } from 'react-icons/sl';
import * as Styled from './TripPlanCommon.styles';
import { Button } from '@/components/common';

export const TripPlanPrevButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Styled.PrevButton>
      <button type="button" onClick={goBack} aria-label="previous">
        <SlArrowLeft fontSize="15" />
      </button>
    </Styled.PrevButton>
  );
};
export const TripPlanNextButton = () => {
  return (
    <Styled.NextButton>
      <Button
        type="button"
        variants="gray"
        size="lg"
        rounded="sm"
        aria-label="next">
        <Link to="/trip/country">다음</Link>
      </Button>
    </Styled.NextButton>
  );
};
