import styled from 'styled-components';
import { alignCenter } from '@/styles/common';

export const Bubble = styled.div`
  ${alignCenter};
  justify-content: center;

  position: relative;

  background-color: ${({ theme }) => theme.brand.primary};
  border-radius: 0.25rem;
  padding: 0.125rem 0.5rem;
  margin-bottom: 0.25rem;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.75rem;
    border: 0.375rem solid transparent;
    border-top: 0.5rem solid ${({ theme }) => theme.brand.primary};
  }
`;

export default Bubble;
