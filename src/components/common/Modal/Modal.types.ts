import { ReactNode } from 'react';

export interface ModalProps {
  children?: ReactNode;
  type?: 'error' | 'success' | 'info';
  open: boolean;
  onClose: VoidFunction;
  title?: string;
}
