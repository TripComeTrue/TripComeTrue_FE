import styled from 'styled-components';
import { alignCenter } from '@/styles/common';

export const NavWrap = styled.div`
  height: 2.5rem;

  z-index: 100;
  background-color: #7f7f7f;

  ${alignCenter}
  gap: 0.7rem;

  padding: 0 0.8rem;
`;

export const NavIconBox = styled.div`
  width: 1.25rem;
  cursor: pointer;
  img {
    margin-top: 0.5rem;
  }
`;

export const NavTitleBox = styled.div`
  ${alignCenter}

  img {
    width: 1.1rem;
  }
`;
export const NavTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: bold;
  line-height: 1.5rem;
  flex: 1;
  text-align: left;
  color: white;
`;
