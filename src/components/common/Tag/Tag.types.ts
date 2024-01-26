import { ReactNode } from 'react';

export interface TagProps {
  children: ReactNode;
  fontSize?: number;
  color?: 'primary';
  bgColor?: 'white';
  size?: 'sm';
  src: string;
}
