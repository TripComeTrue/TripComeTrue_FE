import styled from 'styled-components';
import { maxWidth } from '@/styles/common';

export const NavWrap = styled.div`
  position: fixed;
  width: 100%;
  height: 2.5rem;
  top: 0;
  left: 0;
`;

export const NavInner = styled.div`
  ${maxWidth};
  margin: 0 auto;
  height: 100%;
  background-color: ${(props) => props.theme.brand.white};
  padding: 0 20px;
  display: flex;
  align-items: center;
`;

export const NavBackBtn = styled.div`
  width: 1.25rem;
  cursor: pointer;
  img {
    margin-top: 0.5rem;
  }
`;

export const NavTitle = styled.h3`
  text-align: center;
  flex: 1;
  font-size: 1.125rem;
  font-weight: 600;
`;

export const NavRightBtns = styled.div`
  width: 1.25rem;
`;
