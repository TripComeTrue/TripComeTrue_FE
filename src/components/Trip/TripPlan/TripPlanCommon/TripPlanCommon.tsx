import { SlArrowLeft } from 'react-icons/sl';
import { Button } from '@/components/common';
import * as Styled from './TripPlanCommon.styles';
import { NavButtonProps } from './TripPlanCommon.types';

export const TripPlanPrevButton = ({ onClick }: NavButtonProps) => {
  return (
    <Styled.PrevButton>
      <button type="button" onClick={onClick} aria-label="previous">
        <SlArrowLeft fontSize="15" />
      </button>
    </Styled.PrevButton>
  );
};
export const TripPlanNextButton = ({ onClick }: NavButtonProps) => {
  return (
    <Styled.NextButton>
      <Button
        onClick={onClick}
        type="button"
        variants="gray"
        size="lg"
        rounded="sm"
        aria-label="next">
        다음
      </Button>
    </Styled.NextButton>
  );
};
