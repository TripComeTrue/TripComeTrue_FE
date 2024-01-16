import styled from 'styled-components';

export const ShortsListWrapper = styled.div`
  min-height: 100vh;
`;

export const ShortsListBox = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.8rem 2%;

  padding: 0 1.25rem;

  div {
    flex: 0 0 48%;
  }
`;
