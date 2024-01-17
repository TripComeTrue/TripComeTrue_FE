import { Gallery, SpotInformation, TopReview } from '@/components/DetailFeed';
import * as Styled from './TouristSpot.styles';
import { FeedNav } from '@/components/common';

const TouristSpot = () => {
  return (
    <div>
      <FeedNav isScheduleIcon>순천만습지</FeedNav>
      <Styled.TouristSpotWrap>
        <Gallery />
        <SpotInformation />
        <TopReview />
      </Styled.TouristSpotWrap>
    </div>
  );
};

export default TouristSpot;
