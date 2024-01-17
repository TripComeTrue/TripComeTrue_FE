import { Gallery, SpotInformation, TopReview } from '@/components/DetailFeed';
import * as Styled from './TouristSpot.styles';

const TouristSpot = () => {
  return (
    <Styled.TouristSpotWrap>
      <Gallery />
      <SpotInformation />
      <TopReview />
    </Styled.TouristSpotWrap>
  );
};

export default TouristSpot;
