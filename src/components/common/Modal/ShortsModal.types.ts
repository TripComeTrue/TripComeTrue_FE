import { ModalProps } from './Modal.types';

export type ShortsModalProps = Omit<ModalProps, 'type' | 'title'> & {
  videoId: string;
  profileImageUrl: string;
  memberName: string;
  tripRecordId: number;
  tripRecordTitle: string;
  memberId: number;
};
