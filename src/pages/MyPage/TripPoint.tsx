import { SimpleNav } from '@/components/common';
import Container from '@/components/common/Container';
import { MyPageLevel, MyPageMyTripPoint } from '@/components/MyPage';
import MyPageContainer from '@/components/MyPage/MyPageLayout/MyPageLayout.styles';

function TripPoint() {
  return (
    <>
      <SimpleNav>트립포인트</SimpleNav>
      <MyPageContainer>
        <Container>
          <MyPageMyTripPoint />
          <MyPageLevel />
        </Container>
      </MyPageContainer>
    </>
  );
}

export default TripPoint;
