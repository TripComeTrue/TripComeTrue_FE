import { Outlet, useLocation } from 'react-router-dom';
import { TabBar } from '@/components/common';
import MyPageContainer from './MyPageLayout.styles';

function MyPageLayout() {
  const { pathname } = useLocation();
  return (
    <MyPageContainer>
      <Outlet />
      {pathname !== '/mypage/notification' && <TabBar />}
    </MyPageContainer>
  );
}

export default MyPageLayout;
