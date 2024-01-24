import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AuthModal, TabBar } from '@/components/common';
import * as Styled from './MyPageLayout.styles';
import useModal from '@/hooks/common/useModal';
import getCookie from '@/utils/token';

function MyPageLayout() {
  const { pathname } = useLocation();
  const { open, handleOpen, handleClose } = useModal();

  useEffect(() => {
    const token = getCookie('accessToken');
    if (!token) handleOpen();
  }, []);

  return (
    <Styled.MyPageLayoutWrap>
      <Outlet />
      {pathname !== '/mypage/notification' && <TabBar />}
      <AuthModal open={open} onClose={handleClose} />
    </Styled.MyPageLayoutWrap>
  );
}

export default MyPageLayout;
