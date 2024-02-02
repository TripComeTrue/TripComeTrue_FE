import styled from 'styled-components';
import { flexColumn } from '@/styles/common';

export const Container = styled.div`
  ${flexColumn};
  gap: 0.75rem;

  border: 1px solid ${({ theme }) => theme.brand.primary};
  border-radius: 0.625rem;
  padding: 1.25rem;
  margin: 0 1.25rem;
`;

export const ReviewContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

export const ReviewContents = styled.div`
  ${flexColumn};
`;

export const RatingContainer = styled.div`
  ${flexColumn}
  align-items: center;
  justify-content: center;
`;
