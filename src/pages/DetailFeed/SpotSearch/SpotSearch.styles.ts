import styled from 'styled-components';
import { alignCenter } from '@/styles/common';

export const SpotSearchWrapper = styled.div`
  padding: 0 1.25rem;
  margin-top: 2rem;
`;

export const SpotSearchBox = styled.div`
  height: 2.8rem;

  border-radius: 1.875rem;
  padding: 0.25rem 1.25rem;
  background-color: black;
  ${alignCenter}

  margin-bottom: 2rem;
`;

export const SpotSearchInput = styled.input`
  width: 100%;
  height: 100%;

  font-size: 0.7rem;
  color: white;
  background-color: black;
  border: none;

  &::placeholder {
    color: white;
    font-size: 0.7rem;
  }
`;

export const SpotListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
