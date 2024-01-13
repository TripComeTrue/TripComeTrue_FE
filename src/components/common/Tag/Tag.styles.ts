import styled from 'styled-components';
import { alignCenter } from '@/styles/common';

export const Container = styled.div<{
  $bgColor?: string;
  $size?: string;
}>`
  ${alignCenter}
  justify-content: center;
  gap: 0.3125rem;

  width: 100%;
  border-radius: 0.25rem;
  background-color: ${({ theme, $bgColor }) =>
    $bgColor === 'white' ? '#FFFFFF99' : theme.brand.primary};
  padding: ${({ $size }) =>
    $size === 'sm' ? '0.125rem 0.3125rem' : '0.4375rem 0.6875rem'};
`;

export const TagIcon = styled.div<{ $color?: string }>`
  ${alignCenter}

  color: ${({ theme, $color }) =>
    $color === 'primary' ? theme.brand.primary : 'black'};
`;
