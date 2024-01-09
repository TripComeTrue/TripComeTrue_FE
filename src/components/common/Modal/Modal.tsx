import { Modal as MuiModal } from '@mui/material';
import { IoAlertCircleOutline } from 'react-icons/io5';
import * as Styled from './Modal.styles';
import { ModalProps } from './Modal.types';
import { Button } from '..';

function Modal({ children, type, open, onClose }: ModalProps) {
  return (
    <MuiModal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Styled.ModalBox>
        <Styled.ModalIconWrap $type={type}>
          <IoAlertCircleOutline />
        </Styled.ModalIconWrap>
        <Styled.ModalContentWrap>{children}</Styled.ModalContentWrap>
        <Button size="md" variants="primary" onClick={onClose}>
          확인
        </Button>
      </Styled.ModalBox>
    </MuiModal>
  );
}

export default Modal;
