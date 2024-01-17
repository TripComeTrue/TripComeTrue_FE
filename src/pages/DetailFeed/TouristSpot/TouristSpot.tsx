import {
  Gallery,
  PlaceReview,
  SpotInformation,
  TopReview,
} from '@/components/DetailFeed';
import * as Styled from './TouristSpot.styles';

const TouristSpot = () => {
  return (
    <Styled.TouristSpotWrap>
      <Gallery />
      <SpotInformation />
      <TopReview />
      <PlaceReview />
    </Styled.TouristSpotWrap>
  );
};

export default TouristSpot;
