import ReactSlidingPane from 'react-sliding-pane';
import styled from 'styled-components';

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

  .checkbox-text {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.text.gray};
  }
`;

export const EachDayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding-bottom: 0.7rem;
  margin: 0.85rem 0;
  gap: 0.5rem;

  border-bottom: 1px solid #f6f6f6;
`;

export const EachDayInputWrapper = styled.div`
  position: relative;

  .city-icon {
    position: absolute;
    top: 0.4rem;
    left: 0.5rem;

    width: 1.2rem;
    height: 1.2rem;
  }
`;

export const SlidingPane = styled(ReactSlidingPane)`
  .slide-pane__header {
    background-color: white;
    border: 0;

    svg {
      width: 0.9375rem;
      height: 0.9375rem;
    }
  }

  .slide-pane__close {
    margin: 0;
  }
`;

export const EachDayInput = styled.input`
  width: 20rem;
  height: 2rem;
  padding: 1rem 1.8rem;

  border: 1px solid #b4f34c;
  border-radius: 0.5rem;
  outline-color: #b4f34c;

  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.text.black};
`;

export const EachDayText = styled.span`
  margin-left: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;
