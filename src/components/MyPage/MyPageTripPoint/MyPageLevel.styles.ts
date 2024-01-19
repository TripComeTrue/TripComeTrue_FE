import styled, { css } from 'styled-components';
import { borderGradient } from './MyPageMyTripPoint.styles';
import { PoinLevelImageProps } from './MyPageLevel.types';
import { alignCenter } from '@/styles/common';

const px83 = '5.1875rem';
const px63 = '3.9375rem';

export const MyCurrentLevelWrap = styled.div`
  margin: 0.625rem 0 1.25rem;
  display: flex;
  justify-content: space-evenly;
`;

const levelItemBg = css`
  width: ${px83};
  height: ${px83};
  border-radius: ${px83};
  border: 2px solid transparent;
  overflow: hidden;
`;

export const MyCurrentLevelItem = styled.div<{ $isactive?: string }>`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ $isactive, theme }) =>
    $isactive === 'true' ? theme.text.black : theme.brand.gray};
`;

export const MyCurrentLevelItemBg = styled.div<{ $isactive?: string }>`
  ${levelItemBg};
  ${({ $isactive }) => $isactive === 'true' && borderGradient};
  margin-bottom: 0.4375rem;
`;

// prettier-ignore
export const LevelImage = styled.div<PoinLevelImageProps>`
  width: 100%;
  height: 100%;
  background-color: ${({$isactive, $bgColor, theme}) => $isactive === "true" ? $bgColor : theme.brand.lightGray};
  background-image: url(/images/${({ $level }) => $level}-${({ $isactive }) => $isactive === "true" ? "active" : "normal"}.png);
  background-position: 50% 50%;
  background-size: ${({$bgSize}) => $bgSize};
  background-repeat: no-repeat;
`;

export const LevelBenefitWrap = styled.div`
  margin: 1.25rem 0;
  padding: 0 0.875rem;
  border-radius: 0.625rem;
  background-color: ${({ theme }) => theme.brand.lightGray};
`;

export const LevelBenefitItem = styled.div`
  ${alignCenter};
  gap: 0 1.5625rem;
  padding: 1.5rem 0;
  border-bottom: 1px dashed ${({ theme }) => theme.brand.gray};
  &:last-child {
    border-bottom: 0;
  }
`;

// prettier-ignore
export const LevelBenefitImage = styled.div<PoinLevelImageProps>`
  flex-shrink: 0;
  width: ${px63};
  height: ${px63};
  border-radius: ${px63};
  background-color: ${({$isactive, $bgColor, theme}) => $isactive === "true" ? $bgColor : theme.brand.lightGray};
  background-image: url(/images/${({ $level }) => $level}-${({ $isactive }) => $isactive === "true" ? "active" : "normal"}.png);
  background-position: 50% 50%;
  background-size: ${({$bgSize}) => $bgSize};
  background-repeat: no-repeat;
`;

export const LevelBadge = styled.div<{ $bgColor: string }>`
  display: inline-block;
  min-width: 4.25rem;
  margin-bottom: 0.8125rem;
  padding: 0.1875rem 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ $bgColor, theme }) =>
    $bgColor === '#505050' ? theme.brand.white : theme.brand.black};
  background-color: ${({ $bgColor }) => $bgColor};
  text-align: center;
  border-radius: 0.125rem;
`;
