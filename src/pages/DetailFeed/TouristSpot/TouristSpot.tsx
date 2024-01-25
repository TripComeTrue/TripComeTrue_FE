import {
  Gallery,
  RecommendSpot,
  SpotInformation,
  SpotReview,
  SpotTopReview,
} from '@/components/DetailFeed';
import { FeedNav } from '@/components/common';
import * as Styled from './TouristSpot.styles';

const TouristSpot = ({ placeId = 1 }: { placeId?: number }) => {
  return (
    <>
      <FeedNav isScheduleIcon>여행지 이름</FeedNav>
      <Styled.TouristSpotWrap>
        <Gallery id={placeId} galleryType="spot" />
        <SpotInformation id={placeId} />
        <SpotTopReview id={placeId} />
        {/* <SpotReview placeId={placeId} /> */}
        <RecommendSpot id={placeId} />
      </Styled.TouristSpotWrap>
    </>
  );
};

export default TouristSpot;
