import styled from 'styled-components';
import { alignCenter, justifyAround } from '@/styles/common';

export const WeatherWrapper = styled.section`
  height: 11rem;
`;

export const WeatherBox = styled.div`
  height: 6rem;

  margin-top: 1rem;
  padding: 1.375rem 1rem;

  ${justifyAround}

  border-radius: 0.625rem;
  background-color: ${({ theme }) => theme.brand.lightGray};
`;

export const WeatherItem = styled.div`
  width: 17.8125rem;
  height: 3.25rem;

  ${alignCenter}
  flex-direction: column;
  gap: 0.5rem;
`;

export const WeatherMonth = styled.div`
  width: 3rem;
  height: 1.25rem;

  padding: 0 0.4375rem;

  ${alignCenter}
  justify-content: center;

  background-color: ${({ theme }) => theme.brand.black};
  border-radius: 0.375rem;
`;

export const WeatherTemperature = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export const WeatherSource = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.4rem;
  margin-top: 0.7rem;
`;
