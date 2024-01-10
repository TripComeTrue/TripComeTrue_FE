import { ModalProps } from './Modal.types';

export type SelectModalProps = Omit<ModalProps, 'type'> & {
  title?: string;
};
