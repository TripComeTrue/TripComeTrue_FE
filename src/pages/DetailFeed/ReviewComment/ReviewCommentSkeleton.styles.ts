import styled from 'styled-components';
import { alignCenter, flexColumn } from '@/styles/common';

export const SkeletonReviewContainer = styled.div`
  ${flexColumn};
  gap: 0.625rem;

  padding: 1.25rem;
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

export const SkeletonCommentItem = styled.div`
  ${flexColumn};
  gap: 0.625rem;

  padding: 1.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.brand.gray};
`;
