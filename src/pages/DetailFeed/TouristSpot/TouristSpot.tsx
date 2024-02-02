import { useQueries } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import {
  PlaceReviews,
  RecommendSpot,
  SpotGallery,
  SpotInformation,
  SpotTopReview,
} from '@/components/DetailFeed';
// import { FeedNav } from '@/components/common';
import * as Styled from './TouristSpot.styles';
import { getSpotInformation } from '@/apis/detailfeed';
import { getPlaceReviews } from '@/apis/place';

const TouristSpot = () => {
  const { placeId } = useParams() as { placeId: string };
  const [{ data: spotInformation, isLoading }, { data: placeReviewsData }] =
    useQueries({
      queries: [
        {
          queryKey: ['spotInformaion', placeId],
          queryFn: () => getSpotInformation(placeId),
        },
        {
          queryKey: ['PlaceReviewsData'],
          queryFn: () => getPlaceReviews({ placeId }),
        },
      ],
    });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!spotInformation) {
    return <p>Data not available</p>;
  }

  const { address, latitude, longitude, phoneNumber, name, cityId } =
    spotInformation;

  return (
    <>
      {/* <FeedNav
        isScheduleIcon
        placeId={placeId}
        isStored={isStored}
        feedType="spot">
        {name}
      </FeedNav> */}
      <Styled.TouristSpotWrap>
        <SpotGallery placeId={placeId} placeName={name} />
        <SpotInformation
          cityId={cityId}
          address={address}
          latitude={latitude}
          longitude={longitude}
          phoneNumber={phoneNumber}
        />
        <SpotTopReview placeId={placeId} placeName={name} />
        <RecommendSpot placeId={placeId} />
        <PlaceReviews placeReviewsData={placeReviewsData} placeId={placeId} />
      </Styled.TouristSpotWrap>
    </>
  );
};

export default TouristSpot;
