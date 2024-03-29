import styled from 'styled-components';
import { alignCenter } from '@/styles/common';

export const SpotInfoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 0 1.25rem;
`;

export const SpotMapContainer = styled.div``;

export const SpotInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding: 0.625rem;

  border-radius: 0.75rem;

  background-color: #f6f6f6;
`;

export const SpotInfo = styled.div`
  ${alignCenter}
  gap: 0.4rem;
`;

export const InfoIcon = styled.img`
  height: 0.75rem;
  fill: ${({ theme }) => theme.brand.primary};
`;
