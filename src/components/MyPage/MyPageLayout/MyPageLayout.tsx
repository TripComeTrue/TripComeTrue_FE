import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Modal, TabBar } from '@/components/common';
import * as Styled from './MyPageLayout.styles';
import useModal from '@/hooks/common/useModal';
import getCookie from '@/utils/token';

function MyPageLayout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { open, handleOpen, handleClose } = useModal();
  const onClose = () => {
    navigate('/');
    handleClose();
  };
  useEffect(() => {
    const token = getCookie('accessToken');
    if (!token) handleOpen();
  }, []);

  return (
    <Styled.MyPageLayoutWrap>
      <Outlet />
      {pathname !== '/mypage/notification' && <TabBar />}
      <Modal open={open} onClose={onClose} title="로그인이 필요한 서비스">
        로그인을 먼저 해주세요.
      </Modal>
    </Styled.MyPageLayoutWrap>
  );
}

export default MyPageLayout;
