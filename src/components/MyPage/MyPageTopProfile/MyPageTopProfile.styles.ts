import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { alignCenter, justifyBetween } from '@/styles/common';
import { Button } from '@/components/common';

export const MyPageTopProfileWrap = styled.div`
  padding: 1.25rem;
`;

export const MyPageTopProfileBox = styled.div`
  ${justifyBetween};
  align-items: center;
  margin-bottom: 1.25rem;
`;

export const MyPageTopProfileInfo = styled.div`
  ${alignCenter}
  gap: 1rem;
`;

export const MyPageTopProfileLevel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  height: 1rem;
  padding: 0.25rem;
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.brand.gray};
`;

export const MyPageTopProfileBtns = styled.div`
  width: 6rem;
  text-align: center;
`;

export const MyPageTopProfileBtn = styled(Button)`
  padding: 0 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  svg {
    vertical-align: -0.125rem;
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export const MyPageTopProfileMenusWrap = styled.div`
  display: grid;
  grid-template-rows: 2.5rem 2.75rem;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem 0.875rem;
`;

const MenuRadius = css`
  border-radius: 0.4375rem;
`;

export const MyPageTopProfileMenuItem = styled(Link)`
  ${MenuRadius};
  ${alignCenter};
  gap: 1.25rem;
  background-color: ${({ theme }) => theme.brand.lightGray};
  padding: 0.625rem 0.625rem 0.625rem 1.3125rem;
  svg {
    font-size: 1.5rem;
    vertical-align: middle;
  }
`;

export const MyPageTopProfilePointMenu = styled(Link)`
  ${MenuRadius};
  ${alignCenter};
  justify-content: space-between;
  background-color: ${({ theme }) => theme.brand.primary};
  grid-column: 1/3;
  padding: 0.625rem 0.625rem 0.625rem 1rem;
`;

export const MyPageTopProfilePointText = styled.div`
  ${alignCenter};
  gap: 1.125rem;
`;
