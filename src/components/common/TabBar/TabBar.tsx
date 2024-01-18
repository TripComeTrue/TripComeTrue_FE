import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as Styled from './TabBar.styles';

const navItems = [
  { to: 'home', text: '홈 피드' },
  { to: 'trip', text: '상세 피드' },
  { to: 'mypage', text: '마이페이지' },
];

function TabBar() {
  const { pathname } = useLocation();
  const [isFixed, setIsFixed] = useState<boolean>(false);

  useEffect(() => {
    const checkHeight = () => {
      const totalHeight = document.body.scrollHeight;
      const viewportHeight = window.innerHeight;
      setIsFixed(totalHeight <= viewportHeight);
    };

    checkHeight();
    window.addEventListener('resize', checkHeight);

    return () => window.removeEventListener('resize', checkHeight);
  }, []);

  return (
    <Styled.TabBarWrap
      $isfixed={`${isFixed || pathname.startsWith(`/mypage`)}`}>
      <Styled.TabBar>
        <Styled.TabItems>
          {navItems.map((item) => (
            <Styled.TabItem
              key={item.to}
              $itemName={item.to}
              $isActive={`${pathname.startsWith(`/${item.to}`)}`}>
              <Link to={`/${item.to}`}>{item.text}</Link>
            </Styled.TabItem>
          ))}
        </Styled.TabItems>
      </Styled.TabBar>
    </Styled.TabBarWrap>
  );
}

export default TabBar;
