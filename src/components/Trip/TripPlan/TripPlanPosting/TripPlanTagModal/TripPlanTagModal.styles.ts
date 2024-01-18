import styled from 'styled-components';
import { Button } from '@/components/common';

export const TripPlanTagBox = styled.div`
  margin-bottom: 1.25rem;
`;

export const TripPlanTagLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 400;
  color: ${({ theme }) => theme.text.black};
  margin: 0.9375rem 0;
  cursor: pointer;
  & input[type='radio'] {
    appearance: none;
    background-color: #fff;
    margin: 0;
    font: inherit;
    color: currentColor;
    width: 1.125rem;
    height: 1.125rem;
    border: 0.125rem solid ${({ theme }) => theme.brand.primary};
    border-radius: 50%;
    transform: translateY(0);
    display: grid;
    place-content: center;
  }
  & input[type='radio']::before {
    content: '';
    width: 0.625rem;
    height: 0.625rem;
    border-radius: 50%;
    transform: scale(0);
    transition: 0.2s transform ease-in-out;
    box-shadow: inset 1em 1em ${({ theme }) => theme.brand.primary};
  }
  & input[type='radio']:checked::before {
    transform: scale(1);
  }
`;

export const TripPlanInputWrap = styled.div`
  position: relative;
  margin-top: 0.625rem;
`;

export const TripPlanUrlInput = styled.input`
  display: block;
  width: 100%;
  height: 2rem;
  padding: 0.4375rem 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.brand.primary};
`;

export const TripPlanUrlInputClear = styled(Button)`
  position: absolute;
  top: 0.125rem;
  right: 0.5rem;
  padding: 0.125rem;
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.text.gray};
  &:hover {
    background-color: transparent;
  }
`;

export const TripPlanBtnWrap = styled.div`
  display: flex;
  gap: 1rem;
  padding-bottom: 2.5rem;
`;
