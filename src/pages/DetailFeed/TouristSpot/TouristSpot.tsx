import { Suspense } from 'react';
import {
  GallerySkeleton,
  HotPlaceSkeleton,
  PlaceReviews,
  RecommendSpot,
  SpotGallery,
  SpotInformation,
  SpotInformationSkeleton,
  SpotTopReview,
  TopReviewSkeleton,
} from '@/components/DetailFeed';
import {
  RetryErrorBoundary,
  FeedNav,
  FeedNavSkeleton,
} from '@/components/common';
import * as Styled from './TouristSpot.styles';

const TouristSpot = () => {
  return (
    <>
      <RetryErrorBoundary>
        <Suspense fallback={<FeedNavSkeleton />}>
          <FeedNav isScheduleIcon feedType="spot" />
        </Suspense>
      </RetryErrorBoundary>
      <Styled.TouristSpotWrap>
        <RetryErrorBoundary>
          <Suspense fallback={<GallerySkeleton />}>
            <SpotGallery />
          </Suspense>
        </RetryErrorBoundary>
        <RetryErrorBoundary>
          <Suspense fallback={<SpotInformationSkeleton />}>
            <SpotInformation />
          </Suspense>
        </RetryErrorBoundary>
        <RetryErrorBoundary>
          <Suspense fallback={<TopReviewSkeleton />}>
            <SpotTopReview />
          </Suspense>
        </RetryErrorBoundary>
        <RetryErrorBoundary>
          <Suspense fallback={<HotPlaceSkeleton />}>
            <RecommendSpot />
          </Suspense>
        </RetryErrorBoundary>
        <RetryErrorBoundary>
          <Suspense>
            <PlaceReviews />
          </Suspense>
        </RetryErrorBoundary>
      </Styled.TouristSpotWrap>
    </>
  );
};

export default TouristSpot;
