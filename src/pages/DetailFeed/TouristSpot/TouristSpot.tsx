import {
  PlaceReviews,
  RecommendSpot,
  SpotGallery,
  SpotInformation,
  SpotTopReview,
} from '@/components/DetailFeed';
import { FeedNav } from '@/components/common';
import * as Styled from './TouristSpot.styles';

const TouristSpot = () => {
  return (
    <>
      <FeedNav isScheduleIcon feedType="spot" />
      <Styled.TouristSpotWrap>
        <SpotGallery />
        <SpotInformation />
        <SpotTopReview />
        <RecommendSpot />
        <PlaceReviews />
      </Styled.TouristSpotWrap>
    </>
  );
};

export default TouristSpot;
