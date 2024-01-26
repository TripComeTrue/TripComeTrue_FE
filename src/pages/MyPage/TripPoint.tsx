import { useQuery } from '@tanstack/react-query';
import { SimpleNav } from '@/components/common';
import Container from '@/components/common/Container';
import { MyPageLevel, MyPageMyTripPoint } from '@/components/MyPage';
import MyPageContainer from '@/components/MyPage/MyPageLayout/MyPageLayout.styles';
import { getMemberDetail } from '@/apis/mypage';

function TripPoint() {
  const { data, isLoading } = useQuery({
    queryKey: ['member', 'detail'],
    queryFn: getMemberDetail,
  });

  if (isLoading || !data) return null;
  return (
    <>
      <SimpleNav>트립포인트</SimpleNav>
      <MyPageContainer>
        <Container>
          <MyPageMyTripPoint data={data.data} />
          <MyPageLevel tripLevel={data.data.tripLevel} />
        </Container>
      </MyPageContainer>
    </>
  );
}

export default TripPoint;
