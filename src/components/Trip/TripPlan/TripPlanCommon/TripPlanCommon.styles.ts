import styled from 'styled-components';

export const PrevButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 1rem 0;
  bottom: 0;

  background-color: white;

  button {
    cursor: pointer;
  }
`;

export const NextButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;

  width: 360px;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
  height: 4.5rem;

  bottom: 0;
  margin: 0 auto;
  padding: 0 1rem;

  background-color: white;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  padding: 0.2rem 1.2rem;
`;

export const Title = styled.div`
  padding: 0;
  margin-bottom: 1rem;

  font-size: 1.7rem;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: 2.2rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
