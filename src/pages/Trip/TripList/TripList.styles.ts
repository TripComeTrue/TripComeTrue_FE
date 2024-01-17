import styled from 'styled-components';
import { alignCenter } from '@/styles/common';

export const Container = styled.div``;

export const MainContainer = styled.div`
  margin: 1.5rem 1.25rem 0;
`;

export const SearchButton = styled.button`
  ${alignCenter}
  justify-content: flex-start;

  width: 100%;
  background-color: #2f2f2f;
  margin-bottom: 1.5rem;
  padding: 0.625rem 1.25rem;
  border-radius: 1.875rem;
`;
