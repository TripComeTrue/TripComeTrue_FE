import { useParams } from 'react-router-dom';
import { SimpleNav } from '@/components/common';
import MyPageContainer from '@/components/MyPage/MyPageLayout/MyPageLayout.styles';

function WishListMore() {
  const { type } = useParams();
  return (
    <>
      <SimpleNav>보관 {type}</SimpleNav>
      <MyPageContainer>WishListMore</MyPageContainer>
    </>
  );
}

export default WishListMore;
