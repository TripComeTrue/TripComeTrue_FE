import { MyPageChangePassword } from '@/components/MyPage';
import MyPageContainer from '@/components/MyPage/MyPageLayout/MyPageLayout.styles';
import { SimpleNav } from '@/components/common';

function ChangePassword() {
  return (
    <>
      <SimpleNav>비밀번호 변경</SimpleNav>
      <MyPageContainer>
        <MyPageChangePassword />
      </MyPageContainer>
    </>
  );
}

export default ChangePassword;
