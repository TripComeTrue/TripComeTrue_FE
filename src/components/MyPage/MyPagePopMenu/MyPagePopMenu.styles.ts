import styled from 'styled-components';
import { Button, Text } from '@/components/common';

export const MyPagePopMenuBtn = styled(Button)`
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

export const MyPagePopMenuIcon = styled(Text)`
  vertical-align: 2px;
`;
