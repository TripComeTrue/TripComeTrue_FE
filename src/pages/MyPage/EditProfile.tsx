import { MyPageEditProfile } from '@/components/MyPage';
import MyPageContainer from '@/components/MyPage/MyPageLayout/MyPageLayout.styles';
import { SimpleNav } from '@/components/common';

function EditProfile() {
  return (
    <>
      <SimpleNav>계정관리</SimpleNav>
      <MyPageContainer>
        <MyPageEditProfile />
      </MyPageContainer>
    </>
  );
}

export default EditProfile;
