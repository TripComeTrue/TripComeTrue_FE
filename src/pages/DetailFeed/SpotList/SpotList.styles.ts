import styled from 'styled-components';

export const SpotListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 0 1.25rem;
`;

export const SpotBox = styled.div`
  height: 5.9rem;

  display: flex;
  align-items: flex-start;
  gap: 1.5rem;

  border-bottom: 1px solid #f8f8f8;
  cursor: pointer;
`;

export const SpotImg = styled.img`
  width: 5.25rem;
`;

export const SpotDescription = styled.div`
  height: 4.8rem;

  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.7rem;
`;
