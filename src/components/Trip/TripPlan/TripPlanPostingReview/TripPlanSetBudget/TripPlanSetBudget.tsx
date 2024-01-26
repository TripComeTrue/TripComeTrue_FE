/* eslint-disable react/jsx-props-no-spreading */
// import { useRef } from 'react';
import { SubTitle } from '@/components/common';
import { BudgetOptions } from '@/constants/tripPlanAndRecord';
import * as Styled from './TripPlanSetBudget.styles';
import { TripPlanSetBudgetProps } from './TripPlanSetBudget.types';

const TripPlanSetBudget = ({ register }: TripPlanSetBudgetProps) => {
  return (
    <div>
      <SubTitle fontSize={17}>여행 경비는 얼마로 준비하셨나요?</SubTitle>

      <Styled.BudgetWrapper>
        <Styled.BudgetSelection
          // ref={selectRef}
          {...register('expenseRangeType')}>
          {BudgetOptions.map((budget) => (
            <option key={budget.label} value={budget.value}>
              {budget.label}
            </option>
          ))}
        </Styled.BudgetSelection>
        <Styled.ArrowIcon />
      </Styled.BudgetWrapper>
    </div>
  );
};

export default TripPlanSetBudget;
