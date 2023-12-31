import styled from 'styled-components';
import { TabItemProps, TabbarProps } from './TabBar.types';
import { inner, justifyAround } from '@/styles/common';

export const TabbarWrap = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5.0625rem;
`;
export const Tabbar = styled.nav<TabbarProps>`
  ${inner}
  max-width: 768px;
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
    props.isactive === 'true'
      ? `url(/images/${props.itemName}_active.svg)`
      : `url(/images/${props.itemName}.svg)`};
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
