import styled from 'styled-components';
import { Button } from '@/components/common';

export const TripPlanHashWrap = styled.div`
  margin: -2.5rem 0 4rem;
`;
export const TripPlanTagBtn = styled(Button)`
  margin: 0 0.5rem 0.5rem 0;
  padding: 0 0.625rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  height: 1.875rem;
`;
export const TripPlanHashTagsWrap = styled.div`
  margin-top: 1.125rem;
`;
