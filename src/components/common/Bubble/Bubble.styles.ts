import styled, { css } from 'styled-components';
import { alignCenter } from '@/styles/common';

export const Bubble = styled.div<{ $direction?: string }>`
  ${alignCenter};
  justify-content: center;

  position: relative;

  background-color: ${({ theme }) => theme.brand.primary};
  border-radius: 0.25rem;
  padding: 0.125rem 0.5rem;
  margin-bottom: 0.25rem;
  width: max-content;

  &::after {
    content: '';
    position: absolute;
    border: 0.375rem solid transparent;

    ${({ $direction }) =>
      $direction === 'top'
        ? css`
            top: -0.75rem;
            border-bottom: 0.5rem solid ${({ theme }) => theme.brand.primary};
          `
        : css`
            bottom: -0.75rem;
            border-top: 0.5rem solid ${({ theme }) => theme.brand.primary};
          `}
  }
`;

export default Bubble;
