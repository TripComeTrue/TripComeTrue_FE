import { ModalProps } from './Modal.types';

export type ShortsModalProps = Omit<ModalProps, 'type' | 'title'> & {
  videoId?: string;
};
