import styled from 'styled-components';
import { justifyBetween } from '@/styles/common';

export const ExchangeRateWrapper = styled.section`
  height: 15rem;
  margin: 1rem 0;
`;

export const ExchangeRateBox = styled.div`
  height: 10rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  border-radius: 0.625rem;
  padding: 0.75rem 1rem;
  margin-top: 1rem;

  background-color: ${({ theme }) => theme.brand.lightGray};
`;

export const ExchangeRateContent = styled.div`
  height: 3.25rem;
  ${justifyBetween}
`;

export const ContentLeftBox = styled.div`
  width: 5rem;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CurrencyUnit = styled.div`
  height: 1.4rem;

  padding: 0 0.45rem;

  border-radius: 0.375rem;

  background-color: ${({ theme }) => theme.brand.black};

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    white-space: nowrap;
  }
`;

export const ContentRightBox = styled.div`
  display: flex;
  align-items: flex-end;

  span {
    white-space: nowrap;
  }
`;

export const BoxLine = styled.hr`
  background-color: ${({ theme }) => theme.brand.gray};
`;

export const ExchangeRateSource = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.4rem;
  margin-top: 0.7rem;
`;
