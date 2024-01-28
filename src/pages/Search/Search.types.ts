import { ButtonHTMLAttributes } from 'react';

export interface TabButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  $isSelected: boolean;
}
