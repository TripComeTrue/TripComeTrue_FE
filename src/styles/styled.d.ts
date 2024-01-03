import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    brand: {
      primary: string;
      yellow: string;
      black: string;
      gray: string;
      lightGray: string;
      white: string;
    };
    text: {
      black: string;
      gray: string;
    };
    semantic: {
      active: string;
      positive: string;
      negative: string;
      notice: string;
    };
    fontSizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
    fontWeights: {
      light: number;
      medium: number;
      semiBold: number;
      bold: number;
    };
  }
}
