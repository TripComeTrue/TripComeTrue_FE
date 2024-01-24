import { Outlet, useLocation } from 'react-router-dom';
import { TabBar } from '@/components/common';
import * as Styled from './MyPageLayout.styles';

function MyPageLayout() {
  const { pathname } = useLocation();
  return (
    <Styled.MyPageLayoutWrap>
      <Outlet />
      {pathname !== '/mypage/notification' && <TabBar />}
    </Styled.MyPageLayoutWrap>
  );
}

export default MyPageLayout;
