import * as Styled from './MyPageNav.styles';
import notice from '@/assets/notice.svg';

function MyPageNav() {
  return (
    <Styled.MyPageNavWrap>
      <Styled.MyPageNavTitle>마이페이지</Styled.MyPageNavTitle>
      <Styled.MyPageNavNotiLink to="notification">
        <Styled.MyPageNavNotiIcon src={notice} alt="알림 버튼 아이콘" />
      </Styled.MyPageNavNotiLink>
    </Styled.MyPageNavWrap>
  );
}

export default MyPageNav;
