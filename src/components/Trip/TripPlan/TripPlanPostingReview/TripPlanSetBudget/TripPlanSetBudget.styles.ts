import { SlArrowDown } from 'react-icons/sl';
import styled from 'styled-components';

export const BudgetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const BudgetSelection = styled.select`
  width: 100%;
  height: 2.5rem;
  padding-left: 0.8rem;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  background-color: ${({ theme }) => theme.brand.white};
  border: 1px solid #b4f34c;
  border-radius: 0.5rem;
  margin: 0.5rem 0;
  box-sizing: border-box;

  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.text.black};
  font-size: ${({ theme }) => theme.fontSizes.sm};

  &:focus {
    border: 1px solid #b4f34c;
  }
`;

export const ArrowIcon = styled(SlArrowDown)`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);

  pointer-events: none;
`;
