import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { SimpleNav, Spots, SubTitle } from '@/components/common';
import MyPageContainer from '@/components/MyPage/MyPageLayout/MyPageLayout.styles';
import { getWishList } from '@/apis/mypage';

function WishList() {
  const { data, isLoading } = useQuery({
    queryKey: ['mypage/wishlist'],
    queryFn: getWishList,
  });
  const navigate = useNavigate();
  const onClickMore = (value: string) => {
    navigate(value);
  };

  return (
    <>
      <SimpleNav>보관리스트</SimpleNav>
      <MyPageContainer>
        {data?.data && !isLoading && (
          <>
            <SubTitle
              variant="more"
              margin="1rem"
              onClickButton={() => onClickMore('trip')}>
              보관 여행 후기
            </SubTitle>
            <Spots creator={data.data.trip} sort="center" isDelete />
            <SubTitle
              variant="more"
              margin="1rem"
              onClickButton={() => onClickMore('city')}>
              보관 도시
            </SubTitle>
            <Spots creator={data.data.city} sort="left" isDelete />
            <SubTitle
              variant="more"
              margin="1rem"
              onClickButton={() => onClickMore('location')}>
              보관 여행지
            </SubTitle>
            <Spots creator={data.data.location} sort="space" isDelete />
          </>
        )}
      </MyPageContainer>
    </>
  );
}

export default WishList;
