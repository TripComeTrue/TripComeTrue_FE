import { Modal as MuiModal } from '@mui/material';
import {
  IoAlertCircleOutline,
  IoCheckmarkCircleOutline,
} from 'react-icons/io5';
import * as Styled from './Modal.styles';
import { ModalProps } from './Modal.types';
import { Button } from '..';

/**
 * 간단한 모달을 생성하는 컴포넌트 입니다.
 * @param type `optional` 'error' | 'success' | 'info'중 선택하면 아이콘을 넣을수 있습니다
 * @param open 열림 / 닫힘 여부를 전달합니다.
 * @param onClose 닫혔을때 실행할 함수를 전달합니다.
 * @param title `optional` 모달의 제목을 전달합니다.
 * @returns 모달 컴포넌트를 반환 합니다.
 */
function Modal({ children, type, open, onClose, title }: ModalProps) {
  return (
    <MuiModal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Styled.ModalBox>
        <Styled.ModalIconWrap $type={type ?? ''}>
          {type && type === 'success' ? (
            <IoCheckmarkCircleOutline />
          ) : (
            type && <IoAlertCircleOutline />
          )}
        </Styled.ModalIconWrap>
        <Styled.ModalContentWrap>
          {title && (
            <Styled.ModalTitle id="modal-modal-title">
              {title}
            </Styled.ModalTitle>
          )}
          <div id="modal-modal-description">{children}</div>
        </Styled.ModalContentWrap>
        <Button size="md" variants="primary" onClick={onClose}>
          확인
        </Button>
      </Styled.ModalBox>
    </MuiModal>
  );
}

export default Modal;
