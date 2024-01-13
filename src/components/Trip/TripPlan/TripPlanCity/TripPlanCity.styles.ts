import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  height: calc(100vh - 72px);
  padding: 1.2rem;
`;

export const Container = styled.div`
  flex: 1;
  margin-top: 0.7rem;

  span {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export const EachDayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0.5rem 0;
`;

export const EachDayInput = styled.input`
  width: 100%;
  height: 2rem;
  padding: 1rem 0.5rem;
  border: 1px solid #f5f5f5;
`;

export const EachDayText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;
