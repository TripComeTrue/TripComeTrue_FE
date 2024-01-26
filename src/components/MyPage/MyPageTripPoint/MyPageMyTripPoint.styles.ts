import styled, { css } from 'styled-components';
import { alignCenter, justifyBetween } from '@/styles/common';

export const borderGradient = css`
  background-image: linear-gradient(
      ${({ theme }) => theme.brand.white},
      ${({ theme }) => theme.brand.white}
    ),
    linear-gradient(
      to right,
      ${({ theme }) => theme.brand.primary} 0%,
      ${({ theme }) => theme.brand.yellow} 100%
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
`;
export const borderGradientReverse = css`
  background-image: linear-gradient(
      ${({ theme }) => theme.brand.white},
      ${({ theme }) => theme.brand.white}
    ),
    linear-gradient(
      to left,
      ${({ theme }) => theme.brand.primary} 0%,
      ${({ theme }) => theme.brand.yellow} 100%
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

export const MyTripPointBorder = styled.div`
  margin: 0.75rem 0 1.25rem;
  border-radius: 0.8125rem;
  border: 1px solid transparent;
  ${borderGradientReverse};
`;

export const MyTripPointInner = styled.div`
  padding: 0.875rem;
`;

export const MyTripPointProfileWrap = styled.div`
  ${alignCenter};
  gap: 0.5rem;
  margin-bottom: 0.375rem;
`;

export const MyTripPointProgressBg = styled.div`
  height: 0.5625rem;
  background-color: ${({ theme }) => theme.brand.gray};
  border-radius: 0.5625rem;
  margin: 0.5rem 0 0.25rem;
`;

export const MyTripPointProgress = styled.div<{ $percent?: string }>`
  width: ${({ $percent }) => $percent || 0};
  height: 100%;
  border-radius: 0.5625rem;
  background-color: ${({ theme }) => theme.brand.primary};
`;

export const MyTripPointProgressText = styled.div`
  ${justifyBetween};
`;
