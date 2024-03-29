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
 * @param dialog `optional` 취소버튼을 추가합니다.
 * @param onReset `optional` 취소버튼을 눌렀을때 실행할 함수.
 * @param onConfirm `optional` 확인버튼을 눌렀을때 실행할 함수.
 * @returns 모달 컴포넌트를 반환 합니다.
 */
function Modal({
  children,
  type,
  open,
  onClose,
  title,
  dialog,
  onReset,
  onConfirm,
}: ModalProps) {
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
        <Styled.ModalBtnWrap>
          {dialog && (
            <Button size="md" variants="primary-border" onClick={onReset}>
              취소
            </Button>
          )}
          <Button size="md" variants="primary" onClick={onConfirm || onClose}>
            확인
          </Button>
        </Styled.ModalBtnWrap>
      </Styled.ModalBox>
    </MuiModal>
  );
}

export default Modal;
