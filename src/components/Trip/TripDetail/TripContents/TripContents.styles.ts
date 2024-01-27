import styled from 'styled-components';
import { alignCenter } from '@/styles/common';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.625rem;
`;

export const DayButtonList = styled.div`
  ${alignCenter};
  gap: 0.5rem;

  margin: 0 1.25rem;
`;

export const DayButton = styled.button<{ $select: boolean }>`
  background-color: ${({ theme, $select }) =>
    $select ? theme.brand.primary : theme.brand.lightGray};
  color: ${({ theme, $select }) =>
    $select ? theme.brand.black : theme.text.gray};

  padding: 0.125rem 1rem;
  border-radius: 1.875rem;

  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
`;

export const SkeletonWrapper = styled.div`
  margin: 0 1.25rem;
`;
