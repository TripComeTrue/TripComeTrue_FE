import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AuthModal, TabBar } from '@/components/common';
import * as Styled from './MyPageLayout.styles';
import useModal from '@/hooks/common/useModal';
import getCookie from '@/utils/token';

function MyPageLayout() {
  const { pathname } = useLocation();
  const { open, handleOpen, handleClose } = useModal();
  const token = getCookie('accessToken');

  useEffect(() => {
    if (!token) handleOpen();
  }, []);

  return (
    <Styled.MyPageLayoutWrap>
      {token && <Outlet />}
      {token && pathname !== '/mypage/notification' && <TabBar />}
      <AuthModal open={open} onClose={handleClose} redirectUrl={pathname} />
    </Styled.MyPageLayoutWrap>
  );
}

export default MyPageLayout;
