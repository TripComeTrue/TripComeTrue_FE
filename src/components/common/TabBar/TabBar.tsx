import { Link, useLocation } from 'react-router-dom';
import * as S from './TabBar.styles';

const navItems = [
  { to: 'home', text: '홈 피드' },
  { to: 'feed', text: '상세 피드' },
  { to: 'mypage', text: '마이페이지' },
];

function TabBar() {
  const { pathname } = useLocation();

  return (
    <S.TabbarWrap>
      <S.Tabbar>
        <S.TabItems>
          {navItems.map((item) => (
            <S.TabItem
              key={item.to}
              itemName={item.to}
              isactive={`${pathname.startsWith(`/${item.to}`)}`}>
              <Link to={`/${item.to}`}>{item.text}</Link>
            </S.TabItem>
          ))}
        </S.TabItems>
      </S.Tabbar>
    </S.TabbarWrap>
  );
}

export default TabBar;
