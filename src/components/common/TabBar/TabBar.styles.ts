import styled from 'styled-components';
import { TabItemProps, TabBarProps } from './TabBar.types';
import { inner, justifyAround, maxWidth } from '@/styles/common';

export const TabBarWrap = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;

  height: 5.0625rem;
  z-index: 200;
`;
export const TabBar = styled.nav<TabBarProps>`
  ${inner};
  ${maxWidth};
  height: 100%;
  padding-bottom: 1.4375rem;
  background-color: ${(props) => props.theme.brand.white};
  border: 1px solid ${(props) => props.theme.brand.lightGray};
  border-top-left-radius: 1.25rem;
  border-top-right-radius: 1.25rem;
`;

export const TabItems = styled.ul`
  ${justifyAround}
`;

export const TabItem = styled.li<TabItemProps>`
  width: 3.625rem;
  height: 3.625rem;
  background-image: ${(props) =>
    props.$isActive === 'true'
      ? `url(/images/${props.$itemName}_active.svg)`
      : `url(/images/${props.$itemName}.svg)`};
  background-position: 50% 50%;
  background-size: 1.875rem;
  background-repeat: no-repeat;
  a {
    display: block;
    width: 100%;
    height: 100%;
    text-indent: -9999rem;
  }
`;
