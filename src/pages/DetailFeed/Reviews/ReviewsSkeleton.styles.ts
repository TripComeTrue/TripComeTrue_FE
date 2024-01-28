import styled from 'styled-components';
import { alignCenter, flexColumn } from '@/styles/common';

export const SkeletonItem = styled.li`
  ${flexColumn};
  gap: 0.625rem;

  padding: 1.25rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.brand.lightGray};
`;

export const SkeletonInfo = styled.div`
  ${alignCenter};
  justify-content: space-between;
`;

export const SkeletonCreator = styled.div`
  ${alignCenter};
  gap: 0.5rem;
`;
