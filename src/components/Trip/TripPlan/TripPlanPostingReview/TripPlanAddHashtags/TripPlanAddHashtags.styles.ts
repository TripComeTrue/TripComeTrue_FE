import ReactSlidingPane from 'react-sliding-pane';
import styled from 'styled-components';

export const HashtagsInput = styled.input`
  width: 100%;
  height: 2.5rem;
  padding-left: 0.8rem;

  background-color: ${({ theme }) => theme.brand.white};
  border: 1px solid #b4f34c;
  border-radius: 0.4rem;
  margin: 0.5rem 0;

  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.text.black};
  font-size: ${({ theme }) => theme.fontSizes.sm};

  &:focus {
    border: 1px solid #b4f34c;
  }
`;

export const Wrapper = styled.div``;

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
