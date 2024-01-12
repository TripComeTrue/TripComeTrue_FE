import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  brand: {
    primary: '#B4F34C',
    yellow: '#FFE91E',
    black: '#0A0A0A',
    subBlack: '#2F2F2F',
    gray: '#DCDCDC',
    lightGray: '#F6F6F6',
    white: '#FFFFFF',
  },
  text: {
    black: '#0E0E0E',
    gray: '#626262',
  },
  semantic: {
    active: '#0074E2',
    positive: '#00B654',
    negative: '#DE2425',
    notice: '#FFA600',
  },
  fontSizes: {
    xs: '0.75rem' /* 12px */,
    sm: '0.875rem' /* 14px */,
    md: '1rem' /* 16px */,
    lg: '1.125rem' /* 18px */,
    xl: '1.25rem' /* 20px */,
    xxl: '1.5rem' /* 24px */,
    xxxl: '2rem' /* 32px */,
  },
  fontWeights: {
    light: 200,
    medium: 400,
    semiBold: 600,
    bold: 700,
  },
};

export default theme;
