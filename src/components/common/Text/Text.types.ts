import { ReactNode } from 'react';

interface TextProps {
  children?: ReactNode;
  fontSize?: number;
  fontWeight?: number;
  color?: 'white' | 'black' | 'gray' | 'primary' | 'tag';
  tag?: string;
}

export default TextProps;
