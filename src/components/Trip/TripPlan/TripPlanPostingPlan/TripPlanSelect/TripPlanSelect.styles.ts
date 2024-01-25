import styled from 'styled-components';
import { flexColumn } from '@/styles/common';

export const TripPlanSelectWrap = styled.div`
  ${flexColumn};
  justify-content: space-between;
  padding-bottom: 1rem;
`;

export const TripPlanSelectContent = styled.div`
  height: calc(100vh - 3.5rem);
  overflow: auto;
`;
