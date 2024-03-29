import styled from 'styled-components';
import { Text } from '@/components/common';
import { justifyBetween } from '@/styles/common';

export const MyPagePlanItemWrap = styled.div`
  border: 1px solid ${({ theme }) => theme.brand.gray};
  border-radius: 0.625rem;
  padding: 0.875rem 0 0.875rem 2rem;
  ${justifyBetween};
  align-items: center;
`;

export const MyPagePlanName = styled(Text)``;
export const MyPagePlanDate = styled.p`
  font-family:
    'Mundial-Demibold',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  margin-top: 0.25rem;
`;

export const MyPagePlanDateDiff = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.text.gray};
  padding: 0 0.375rem;
  background-color: #e9fcca;
  margin-left: 0.25rem;
  border-radius: 0.25rem;
`;
