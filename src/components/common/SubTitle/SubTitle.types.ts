import { ReactNode } from 'react';

interface SubTitleProps {
  children: ReactNode;
  onClickButton?: () => void;
  icon?: string;
  variant?: 'more';
  margin?: string;
  fontSize?: number;
}

export default SubTitleProps;
