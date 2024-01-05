import { Link, useLocation } from 'react-router-dom';
import * as Styled from './TabBar.styles';

const navItems = [
  { to: 'home', text: '홈 피드' },
  { to: 'trip', text: '상세 피드' },
  { to: 'mypage', text: '마이페이지' },
];

function TabBar() {
  const { pathname } = useLocation();

  return (
    <Styled.TabbarWrap>
      <Styled.Tabbar>
        <Styled.TabItems>
          {navItems.map((item) => (
            <Styled.TabItem
              key={item.to}
              itemName={item.to}
              isactive={`${pathname.startsWith(`/${item.to}`)}`}>
              <Link to={`/${item.to}`}>{item.text}</Link>
            </Styled.TabItem>
          ))}
        </Styled.TabItems>
      </Styled.Tabbar>
    </Styled.TabbarWrap>
  );
}

export default TabBar;
