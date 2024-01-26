import styled from 'styled-components';

export const ShortsListWrapper = styled.div`
  min-height: 100vh;
`;

export const FilterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 3rem;
  padding: 0 1.25rem;
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
