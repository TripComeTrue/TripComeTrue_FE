import styled, { css } from 'styled-components';
import { tabBarHeight } from '@/styles/common';

export const MyPageFormCss = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.25rem 1.25rem 1.4375rem;
`;

export const MyPageFormWrap = styled.form`
  ${tabBarHeight};
  ${MyPageFormCss};
`;

export const MyPageInput = styled.input`
  display: block;
  width: 100%;
  appearance: none;
  border: 1px solid ${({ theme }) => theme.brand.gray};
  border-radius: 0.1875rem;
  transition: border 0.3s;
  padding: 0.75rem 0.875rem;
  margin: 0.625rem 0 0.5rem;
  &::placeholder {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.brand.gray};
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.brand.primary};
    outline: 1px solid ${({ theme }) => theme.brand.primary};
  }
`;

export const MyPageError = styled.span`
  display: block;
  color: ${({ theme }) => theme.semantic.negative};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 0.625rem;
`;
