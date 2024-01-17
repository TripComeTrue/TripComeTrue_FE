import styled from 'styled-components';
import { alignCenter } from '@/styles/common';

export const SpotSearchWrapper = styled.div`
  padding: 0 1.25rem;
  margin-top: 2rem;
`;

export const RecentSearchesTitle = styled.div`
  height: 2.5rem;

  margin-top: 1rem;

  ${alignCenter}
`;

export const SpotSearchBox = styled.div`
  height: 2.8rem;

  border-radius: 1.875rem;
  padding: 0.25rem 1.25rem;
  background-color: black;
  ${alignCenter}
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

export const RecentSearchTermBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const RecentSearchTerm = styled.div`
  height: 1.5rem;

  ${alignCenter}

  padding: 0.125rem 0.5rem;
  border-radius: 1.875rem;
  background-color: ${({ theme }) => theme.brand.lightGray};

  cursor: pointer;
`;
