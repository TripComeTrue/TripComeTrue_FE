import styled from 'styled-components';

export const SpotBox = styled.div`
  height: 5.9rem;

  display: flex;
  align-items: flex-start;
  gap: 1.5rem;

  border-bottom: 1px solid #e9ecef;
  cursor: pointer;
`;

export const SpotImg = styled.img`
  width: 5.25rem;
  height: 5.25rem;
  border-radius: 0.625rem;
`;

export const SpotDescription = styled.div`
  height: 5.5rem;

  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.7rem;
`;
