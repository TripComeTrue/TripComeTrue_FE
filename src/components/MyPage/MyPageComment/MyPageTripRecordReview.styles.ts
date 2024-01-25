import styled from 'styled-components';
import { flexColumn, justifyBetween } from '@/styles/common';

export const TripRecordReviewTop = styled.div`
  ${justifyBetween};
  align-items: center;
`;

export const TripRecordReviewContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

export const TripRecordReviewText = styled.div`
  ${flexColumn};
  flex: 1;
`;
