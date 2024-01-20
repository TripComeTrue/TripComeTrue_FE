import ReactSlidingPane from 'react-sliding-pane';
import styled from 'styled-components';

export const Wrapper = styled.div``;

export const HashtagsDisplay = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 2.5rem;
  padding-left: 0.8rem;
  gap: 0.5rem;

  background-color: ${({ theme }) => theme.brand.lightGray};
  border-radius: 0.4rem;
  margin: 0.5rem 0;

  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.text.black};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const Hashtag = styled.div`
  background-color: ${({ theme }) => theme.brand.white};
  color: ${({ theme }) => theme.brand.tag};
`;

export const SlidingPane = styled(ReactSlidingPane)`
  .slide-pane__header {
    background-color: white;
    border: 0;

    svg {
      width: 0.9375rem;
      height: 0.9375rem;

      margin-right: 2rem;
    }
  }

  .slide-pane__close {
    margin: 0;
  }
`;

export const RemoveBtn = styled.button`
  cursor: pointer;
`;
