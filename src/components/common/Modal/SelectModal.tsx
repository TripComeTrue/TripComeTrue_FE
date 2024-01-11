import { Modal as MuiModal } from '@mui/material';
import { SelectModalProps } from './SelectModal.types';
import * as Styled from './SelectModal.styles';

/**
 * 여러 선택지중 하나를 선택 하는 모달입니다.
 * @param children `optional` 자식 요소를 넣을 수 있습니다.
 * @param open 열림 / 닫힘 여부를 전달합니다.
 * @param onClose 닫혔을때 실행할 함수를 전달합니다.
 * @param title `optional` 모달의 제목을 전달합니다.
 * @returns 모달 컴포넌트를 반환 합니다.
 */
function SelectModal({ children, open, onClose, title }: SelectModalProps) {
  return (
    <MuiModal open={open} onClose={onClose}>
      <Styled.SelectModalWrap>
        <Styled.SelectModalContent>
          {title && <Styled.SelectModalTitle>{title}</Styled.SelectModalTitle>}
          <Styled.SelectModalContentWrap>
            {children}
          </Styled.SelectModalContentWrap>
          <Styled.SelectModalDivider />
          <Styled.SelectModalCloseBtn size="lg" onClick={onClose}>
            닫기
          </Styled.SelectModalCloseBtn>
        </Styled.SelectModalContent>
      </Styled.SelectModalWrap>
    </MuiModal>
  );
}

export default SelectModal;
