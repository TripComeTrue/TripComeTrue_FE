import styled from 'styled-components';

export const PrevButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 1rem 0;
  bottom: 0;

  background-color: white;
`;

export const NextButton = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;

  width: 20rem;
  padding: 1rem 0;
  bottom: 0;
  gap: 0.5rem;

  background-color: white;
`;
