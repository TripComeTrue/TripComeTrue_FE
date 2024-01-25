import styled from 'styled-components';
import { flexColumn } from '@/styles/common';

export const NotFoundImgWrap = styled.div`
  padding: 2.5rem 0;
  img {
    max-width: 100%;
  }
`;

export const NotFoundContent = styled.div`
  ${flexColumn};
  gap: 0.75rem;
  text-align: center;
  padding: 0 1.25rem;
`;
