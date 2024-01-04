import { ChangeEvent } from 'react';

export interface SignUpAgreeChkboxProps {
  text: string;
  name: string;
  viewPolicy?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}
