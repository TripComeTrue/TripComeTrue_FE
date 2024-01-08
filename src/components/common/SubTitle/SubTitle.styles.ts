import styled from 'styled-components';
import { alignCenter } from '@/styles/common';

export const Container = styled.div<{
  $margin: string;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: ${({ $margin }) => $margin};
`;

export const SubTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const MoreButton = styled.button`
  ${alignCenter}
  justify-content: center;

  cursor: pointer;
`;
