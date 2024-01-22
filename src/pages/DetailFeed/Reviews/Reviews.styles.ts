import styled from 'styled-components';
import { alignCenter } from '@/styles/common';

export const NavWrap = styled.div`
  ${alignCenter};
  justify-content: space-between;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;

  width: 100%;
  height: 2.5rem;
  background-color: ${({ theme }) => theme.brand.white};
  padding: 0 1.25rem;
  margin-bottom: 2rem;
`;

export const NavBackBtn = styled.div`
  width: 1.25rem;
  cursor: pointer;
  img {
    margin-top: 0.5rem;
  }
`;

export const NavTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
`;

export const WriteBtnWrapper = styled.div`
  position: relative;

  width: 1.25rem;

  img {
    margin-top: 0.5rem;
  }
`;

export const WriteBtn = styled.img`
  cursor: pointer;
`;

export const BubbleWrapper = styled.div`
  position: absolute;
  right: -60%;
`;

export const Container = styled.div`
  padding: 0 1.25rem;
`;

export const Header = styled.div`
  ${alignCenter};
  justify-content: space-between;
`;

export const CheckBoxContainer = styled.div`
  ${alignCenter};
  gap: 0.1875rem;
`;
