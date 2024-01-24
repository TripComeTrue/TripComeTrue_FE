import { useLayoutEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SimpleNav } from '@/components/common';
import MyPageContainer from '@/components/MyPage/MyPageLayout/MyPageLayout.styles';
import WISH_NAME from '@/constants/MyPage/wishName';
import { MyPageWishListMore } from '@/components/MyPage';

function WishListMore() {
  const navigate = useNavigate();
  const { type = '' } = useParams();
  const title = WISH_NAME[type];

  useLayoutEffect(() => {
    if (title === undefined) {
      navigate('/mypage/wishlist', { replace: true });
    }
  }, [title]);

  return (
    <>
      <SimpleNav>보관 {title}</SimpleNav>
      <MyPageContainer>
        <MyPageWishListMore type={type} />
      </MyPageContainer>
    </>
  );
}

export default WishListMore;
