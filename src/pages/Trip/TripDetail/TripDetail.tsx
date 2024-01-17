import { SimpleNav, SubTitle } from '@/components/common';
import * as Styled from './TripDetail.styles';
import {
  Introduction,
  MainCarousel,
  ReviewAlert,
  TripCarousel,
  TripComment,
  TripContents,
} from '@/components/Trip';

const TripDetail = () => {
  return (
    <div>
      <SimpleNav>여행후기</SimpleNav>
      <Styled.Container>
        <MainCarousel />
        <Introduction />
        <TripContents />
        <TripComment />
        <ReviewAlert />
        <Styled.OtherTripDetails>
          <SubTitle margin="0 1.25rem 0.875rem 0">
            이 여행과 비슷한 여행
          </SubTitle>
          <TripCarousel />
        </Styled.OtherTripDetails>
      </Styled.Container>
    </div>
  );
};

export default TripDetail;
