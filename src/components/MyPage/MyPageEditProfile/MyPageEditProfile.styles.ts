import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { tabBarHeight } from '@/styles/common';
import { MyPageFormCss } from '../MyPagePassword/MyPageConfirmPassword.styles';

export const MyPageEditProfileWrap = styled.form`
  ${tabBarHeight};
  ${MyPageFormCss};
`;

export const MyPageEditInputWrap = styled.div`
  margin-bottom: 1.5rem;
`;

export const MyPageEditLinkWrap = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

export const MyPageEditPasswordLink = styled(Link)`
  padding: 0.5rem 0;
  margin-bottom: 0.75rem;
  & svg {
    vertical-align: middle;
  }
`;

export const MyPageEditDeleteUserBtn = styled.button`
  padding: 0.5rem 0;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.brand.gray};
`;
