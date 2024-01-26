import { useLocation } from 'react-router-dom';
import {
  Gallery,
  RecommendSpot,
  SpotInformation,
  SpotReview,
  SpotTopReview,
} from '@/components/DetailFeed';
import { FeedNav } from '@/components/common';
import * as Styled from './TouristSpot.styles';

const TouristSpot = () => {
  const location = useLocation();
  const { placeName, placeId } = location.state;
  return (
    <>
      <FeedNav isScheduleIcon>{placeName}</FeedNav>
      <Styled.TouristSpotWrap>
        <Gallery id={placeId} placeName={placeName} galleryType="spot" />
        <SpotInformation id={placeId} />
        <SpotTopReview id={placeId} placeName={placeName} />
        {/* <SpotReview placeId={placeId} /> */}
        <RecommendSpot id={placeId} />
      </Styled.TouristSpotWrap>
    </>
  );
};

export default TouristSpot;
