import styled from 'styled-components';
import { alignCenter } from '@/styles/common';

export const MyPageNotiItemWrap = styled.div`
  display: grid;
  grid-template-columns: 1.375rem 1fr;
  gap: 0.4375rem;
  padding: 0.9375rem 1.25rem 1.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.brand.lightGray};
`;

export const MyPageNotiIconWrap = styled.div<{ $read: string }>`
  width: 1.375rem;
  height: 1.375rem;
  border-radius: 1.375rem;
  ${alignCenter};
  justify-content: center;
  svg {
    width: 0.85rem;
    height: 0.85rem;
    path {
      fill: ${({ theme }) => theme.brand.white};
    }
  }
  background-color: ${({ $read, theme }) =>
    $read === 'true' ? theme.brand.primary : theme.brand.yellow};
`;
