import styled from 'styled-components';
import { alignCenter } from '@/styles/common';

export const Container = styled.div<{
  $margin: string;
}>`
  ${alignCenter}
  justify-content: space-between;

  margin: ${({ $margin }) => $margin};
`;

export const SubTitleContainer = styled.div`
  ${alignCenter}
  gap: 0.25rem;
`;

export const MoreButton = styled.button`
  ${alignCenter}
  justify-content: center;

  cursor: pointer;
`;
