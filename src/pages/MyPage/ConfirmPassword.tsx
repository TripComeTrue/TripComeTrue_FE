import { MyPageConfirmPassword } from '@/components/MyPage';
import { SimpleNav } from '@/components/common';
import MyPageContainer from '@/components/MyPage/MyPageLayout/MyPageLayout.styles';

function ConfirmPassword() {
  return (
    <>
      <SimpleNav>계정관리</SimpleNav>
      <MyPageContainer>
        <MyPageConfirmPassword />
      </MyPageContainer>
    </>
  );
}

export default ConfirmPassword;
