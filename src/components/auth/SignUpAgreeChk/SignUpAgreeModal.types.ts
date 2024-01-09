import { ReactNode } from 'react';

export interface SignUpAgreeModalProps {
  children?: ReactNode;
  open: boolean;
  setOpen: (val: boolean) => void;
  policyName: string;
  setPolicyName: (policyName: string) => void;
  handleAgreeAndClose: (policyName: string) => void;
}
