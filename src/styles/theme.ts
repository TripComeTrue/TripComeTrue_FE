import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  brand: {
    primary: '#B4F34C',
    yellow: '#FFE91E',
    black: '#0A0A0A',
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
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
    xxl: '2rem',
  },
  fontWeights: {
    light: 200,
    medium: 400,
    semiBold: 600,
    bold: 700,
  },
};

export default theme;
