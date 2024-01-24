import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { alignCenter } from '@/styles/common';

export const MyPageNavWrap = styled.div`
  position: sticky;
  top: 0;
  height: 2.5rem;
  ${alignCenter};
  justify-content: center;
  background-color: ${({ theme }) => theme.brand.white};
`;

export const MyPageNavTitle = styled.h3`
  width: 100%;
  padding: 0 3rem;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: center;
`;

export const MyPageNavNotiLink = styled(Link)`
  position: absolute;
  width: 1.8125rem;
  height: 1.8125rem;
  top: calc(50% - 0.875rem);
  right: 1rem;
  padding: 0.25rem;
`;

export const MyPageNavNotiIcon = styled.img`
  fill: ${({ theme }) => theme.brand.black};
  vertical-align: top;
`;
