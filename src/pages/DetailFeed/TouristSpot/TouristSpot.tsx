import { useQuery } from '@tanstack/react-query';
import { useLocation, useParams } from 'react-router-dom';
import {
  PlaceReview,
  RecommendSpot,
  SpotGallery,
  SpotInformation,
  SpotTopReview,
} from '@/components/DetailFeed';
import { FeedNav } from '@/components/common';
import * as Styled from './TouristSpot.styles';
import { getSpotInformation } from '@/apis/detailfeed';

const TouristSpot = () => {
  const location = useLocation();
  const { spotId } = useParams() as unknown as { spotId: number };
  const { placeName } = location.state;
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['spotStore', spotId],
    queryFn: () => getSpotInformation(spotId),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>Data not available</p>;
  }

  const { isStored, address, latitude, longitude, phoneNumber } = data;

  return (
    <>
      <FeedNav
        isScheduleIcon
        id={spotId}
        isStored={isStored}
        feedType="spot"
        refetch={refetch}>
        {placeName}
      </FeedNav>
      <Styled.TouristSpotWrap>
        <SpotGallery id={spotId} placeName={placeName} />
        <SpotInformation
          address={address}
          latitude={latitude}
          longitude={longitude}
          phoneNumber={phoneNumber}
        />
        <SpotTopReview id={spotId} placeName={placeName} />
        <RecommendSpot id={spotId} />
        <PlaceReview />
      </Styled.TouristSpotWrap>
    </>
  );
};

export default TouristSpot;
