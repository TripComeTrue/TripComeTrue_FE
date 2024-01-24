import { Link, useNavigate } from 'react-router-dom';
import { Modal as MuiModal } from '@mui/material';
import { Button, Text } from '..';
import { AuthModalProps } from './AuthModal.types';
import * as ModalStyled from './Modal.styles';

/**
 * 로그인 모달을 생성하는 컴포넌트 입니다.
 * @param open 열림 / 닫힘 여부를 전달합니다.
 * @param onClose 닫혔을때 실행할 함수를 전달합니다.
 * @returns 모달 컴포넌트를 반환 합니다.
 */
function AuthModal({ open, onClose, redirectUrl }: AuthModalProps) {
  const navigate = useNavigate();
  const onClickLogin = () => {
    navigate(`${redirectUrl ? `/?redirect=${redirectUrl}` : '/'}`);
  };
  const onClickLater = () => {
    onClose();
    navigate(-1);
  };
  return (
    <MuiModal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <ModalStyled.ModalBox>
        <ModalStyled.ModalContentWrap>
          <ModalStyled.ModalTitle id="modal-modal-title">
            지금 로그인해서 <br />더 많은 서비스를 이용하세요
          </ModalStyled.ModalTitle>
          <div id="modal-modal-description">
            <Text fontSize={12} fontWeight={600}>
              아직 회원이 아니신가요?{' '}
            </Text>{' '}
            <Link to="/auth/signup">
              <Text fontSize={12} fontWeight={600} color="tag">
                회원가입하기
              </Text>
            </Link>
          </div>
        </ModalStyled.ModalContentWrap>
        <Button size="lg" variants="primary" onClick={onClickLogin}>
          로그인하기
        </Button>
        <Button size="lg" variants="text" onClick={onClickLater}>
          다음에 할게요
        </Button>
      </ModalStyled.ModalBox>
    </MuiModal>
  );
}

export default AuthModal;
