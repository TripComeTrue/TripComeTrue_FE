import styled from 'styled-components';
import { alignCenter } from '@/styles/common';

export const Container = styled.div<{
  $mt: string;
  $mb: string;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 1.25rem;
  margin-top: ${({ $mt }) => $mt};
  margin-bottom: ${({ $mb }) => $mb};
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
