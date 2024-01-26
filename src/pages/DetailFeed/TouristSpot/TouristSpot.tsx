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
import { useDetailFeedQuery } from '@/hooks/DetailFeed/useDetailFeedQuery';

const TouristSpot = () => {
  const location = useLocation();
  const { placeName, placeId } = location.state;

  const { data, isLoading } = useDetailFeedQuery<SpotInfoResponseType>({
    queryKey: 'spotMapInfo',
    id: placeId,
    fnUrl: `/v1/places/${placeId}`,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data || !data.data) {
    return <p>Data not available</p>;
  }

  const { isStored, address, latitude, longitude, phoneNumber } = data.data;

  return (
    <>
      <FeedNav isScheduleIcon id={placeId} isStored={isStored}>
        {placeName}
      </FeedNav>
      <Styled.TouristSpotWrap>
        <SpotGallery id={placeId} placeName={placeName} />
        <SpotInformation
          address={address}
          latitude={latitude}
          longitude={longitude}
          phoneNumber={phoneNumber}
        />
        <SpotTopReview id={placeId} placeName={placeName} />
        <RecommendSpot id={placeId} />
        <PlaceReview />
      </Styled.TouristSpotWrap>
    </>
  );
};

export default TouristSpot;
