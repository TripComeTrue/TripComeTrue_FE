import { useQueries } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import {
  PlaceReviews,
  RecommendSpot,
  SpotGallery,
  SpotInformation,
  SpotTopReview,
} from '@/components/DetailFeed';
import { FeedNav } from '@/components/common';
import * as Styled from './TouristSpot.styles';
import { getSpotInformation } from '@/apis/detailfeed';
import { getPlaceReviews } from '@/apis/place';

const TouristSpot = () => {
  const location = useLocation();
  const { placeId, placeName, cityId } = location.state;
  const [{ data, isLoading, refetch }, { data: placeReviewsData }] = useQueries(
    {
      queries: [
        {
          queryKey: ['SpotStore', placeId],
          queryFn: () => getSpotInformation(placeId),
        },
        {
          queryKey: ['PlaceReviewsData'],
          queryFn: () => getPlaceReviews({ placeId }),
        },
      ],
    },
  );

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
        id={placeId}
        isStored={isStored}
        feedType="spot"
        refetch={refetch}>
        {placeName}
      </FeedNav>
      <Styled.TouristSpotWrap>
        <SpotGallery id={placeId} placeName={placeName} />
        <SpotInformation
          cityId={cityId}
          cityName={placeName}
          address={address}
          latitude={latitude}
          longitude={longitude}
          phoneNumber={phoneNumber}
        />
        <SpotTopReview id={placeId} placeName={placeName} />
        <RecommendSpot id={placeId} />
        <PlaceReviews placeReviewsData={placeReviewsData} placeId={placeId} />
      </Styled.TouristSpotWrap>
    </>
  );
};

export default TouristSpot;
