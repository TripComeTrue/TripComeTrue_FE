import { useLocation } from 'react-router-dom';
import {
  SpotGallery,
  RecommendSpot,
  PlaceReview,
  SpotInformation,
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
        <SpotGallery id={placeId} placeName={placeName} />
        <SpotInformation id={placeId} />
        <SpotTopReview id={placeId} placeName={placeName} />
        <RecommendSpot id={placeId} />
        <PlaceReview />
      </Styled.TouristSpotWrap>
    </>
  );
};

export default TouristSpot;
