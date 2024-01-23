import { useRef, useState } from 'react';
import { SubTitle } from '@/components/common';
import Container from '@/components/common/Container';
import { BudgetOptions } from '@/constants/tripPlanAndRecord';
import * as Styled from './TripPlanSetBudget.styles';

const TripPlanSetBudget = () => {
  const [selectedBudget, setSelectedBudget] = useState('');
  const selectRef = useRef<HTMLSelectElement>(null);

  const handleArrowClick = () => {
    selectRef.current?.click();
  };

  const handleSelectBudget = (budget: string) => {
    setSelectedBudget(budget);
  };

  return (
    <Container style={{ marginTop: '-1rem' }}>
      <SubTitle fontSize={17}>여행 경비는 얼마로 준비하셨나요?</SubTitle>

      <Styled.BudgetWrapper>
        <Styled.BudgetSelection
          ref={selectRef}
          onChange={(e) => handleSelectBudget(e.target.value)}
          value={selectedBudget}>
          {BudgetOptions.map((budget) => (
            <option key={budget.label} value={budget.value}>
              {budget.label}
            </option>
          ))}
        </Styled.BudgetSelection>
        <Styled.ArrowIcon onClick={handleArrowClick} />
      </Styled.BudgetWrapper>
    </Container>
  );
};

export default TripPlanSetBudget;
