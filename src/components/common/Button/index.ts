import styled, { DefaultTheme } from 'styled-components';
import { ButtonProps } from './Button.types';

const getPadding = (size?: string) => {
  switch (size) {
    case 'sm':
      return '0 0.9375rem';
    case 'md':
      return '0 1.25rem';
    case 'lg':
      return '0 1.25rem';
    default:
      break;
  }
  return '0 0.9375rem';
};

const getHeight = (size?: string) => {
  switch (size) {
    case 'sm':
      return '1.5rem';
    case 'md':
      return '2.5rem';
    case 'lg':
      return '2.5rem';
    default:
      break;
  }
  return '1.5rem';
};

const getFontSize = (size?: string) => {
  switch (size) {
    case 'sm':
      return '0.75rem';
    case 'md':
      return '0.875rem';
    case 'lg':
      return '0.875rem';
    default:
      break;
  }
  return '0.75rem';
};

const getBgColor = (theme: DefaultTheme, variant?: string) => {
  switch (variant) {
    case 'primary':
      return theme.brand.primary;
    case 'black':
      return theme.brand.black;
    case 'text':
      return theme.brand.white;
    default:
      break;
  }
  return 'transparent';
};

const gethoverBgColor = (variant?: string) => {
  switch (variant) {
    case 'primary':
      return '#8CE200';
    case 'black':
      return '#1e1e1e';
    default:
      break;
  }
  return 'transparent';
};

const Button = styled.button<ButtonProps>`
  display: ${(props) => (props.size === 'lg' ? 'block' : 'inline-block')};
  width: ${(props) => (props.size === 'lg' ? '100%' : 'auto')};
  height: ${(props) => getHeight(props.size)};
  line-height: ${(props) => getHeight(props.size)};
  padding: ${(props) => getPadding(props.size)};
  font-size: ${(props) => getFontSize(props.size)};
  font-weight: bold;
  color: ${(props) =>
    props.variants === 'black'
      ? props.theme.brand.white
      : props.theme.text.black};
  border-radius: 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s;
  background-color: ${(props) => getBgColor(props.theme, props.variants)};
  border-width: ${(props) => (props.variants === 'outlined' ? '1px' : 0)};
  border-style: ${(props) =>
    props.variants === 'outlined' ? 'solid' : 'none'};
  border-color: ${(props) =>
    props.variants === 'outlined' ? props.theme.brand.primary : 'transparent'};
  &:hover {
    background-color: ${(props) => gethoverBgColor(props.variants)};
  }
  &:disabled {
    background-color: ${(props) => props.theme.brand.gray};
    color: ${(props) => props.theme.text.gray};
    cursor: auto;
  }
`;

export default Button;
