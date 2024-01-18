import styled from 'styled-components';
import { Button, Text } from '@/components/common';

export const MyPagePopMenuBtn = styled(Button)<{ $vertical: string }>`
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.375rem 0 0;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  background-color: ${({ $vertical, theme }) =>
    $vertical === 'true' ? 'transparent' : theme.brand.white};
  color: ${({ $vertical, theme }) =>
    $vertical === 'true' ? theme.brand.white : theme.text.black};
  &:hover {
    background-color: ${({ $vertical, theme }) =>
      $vertical === 'true' ? 'rgba(0,0,0,0.15)' : theme.brand.lightGray};
  }
`;

export const MyPagePopMenuIcon = styled(Text)`
  vertical-align: 2px;
`;
