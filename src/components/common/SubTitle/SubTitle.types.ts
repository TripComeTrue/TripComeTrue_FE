import { ReactNode } from 'react';

interface SubTitleProps {
  children: ReactNode;
  onClickButton?: () => void;
  icon?: string;
  variant?: 'more';
  mt?: number;
  mb?: number;
}

export default SubTitleProps;
