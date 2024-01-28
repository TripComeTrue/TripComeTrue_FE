import styled from 'styled-components';
import { alignCenter, flexColumn, justifyBetween } from '@/styles/common';

export const ExchangeRateWrapper = styled.section`
  height: 15rem;
  margin: 1rem 0;
  padding: 0 1.25rem;
`;

export const ExchangeRateBox = styled.div`
  ${flexColumn};
  gap: 1rem;

  height: 10rem;
  border-radius: 0.625rem;
  padding: 0.75rem 1rem;
  margin-top: 1rem;

  background-color: ${({ theme }) => theme.brand.lightGray};
`;

export const ExchangeRateContent = styled.div`
  display: flex;
  align-items: flex-end;

  height: 3.25rem;
`;

export const ContentLeftBox = styled.div`
  ${flexColumn}
  gap: 0.5rem;

  white-space: nowrap;
`;

export const CurrencyUnit = styled.div`
  ${alignCenter};
  justify-content: center;

  width: 100%;
  padding: 0 0.45rem;
  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme.brand.black};
`;

export const ContentRightBox = styled.div`
  ${alignCenter};
  justify-content: flex-end;

  width: 100%;
`;

export const Input = styled.input`
  text-align: right;
  width: 100%;
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
