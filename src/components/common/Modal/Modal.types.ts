import { ReactNode } from 'react';

export interface ModalProps {
  children?: ReactNode;
  type?: 'error' | 'success' | 'info';
  open: boolean;
  onClose: VoidFunction;
  title?: string;
  dialog?: boolean;
  onReset?: VoidFunction;
  onConfirm?: VoidFunction;
}
