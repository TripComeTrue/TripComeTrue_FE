import { useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import {
  Banner,
  CityGallery,
  CityInformation,
  CityInformationSkeleton,
  CityTopReview,
  DetailFeedShorts,
  DetailFeedShortsSkeleton,
  ExchangeRate,
  ExchangeRateSkeleton,
  GallerySkeleton,
  HotPlace,
  TopReviewSkeleton,
  Weather,
  WeatherSkeleton,
} from '@/components/DetailFeed';
import { FeedNav, RetryErrorBoundary } from '@/components/common';
import * as Styled from './City.styles';

const City = () => {
  const location = useLocation();
  const { isDomestic } = location.state as { isDomestic: string };
  const domestic = isDomestic === '국내';
  return (
    <>
      <RetryErrorBoundary>
        <Suspense>
          <FeedNav />
        </Suspense>
      </RetryErrorBoundary>
      <Styled.CityWrapper>
        <RetryErrorBoundary>
          <Suspense fallback={<DetailFeedShortsSkeleton />}>
            <DetailFeedShorts />
          </Suspense>
        </RetryErrorBoundary>
        <RetryErrorBoundary>
          <Suspense fallback={<GallerySkeleton />}>
            <CityGallery />
          </Suspense>
        </RetryErrorBoundary>
        <RetryErrorBoundary>
          <Suspense fallback={<CityInformationSkeleton />}>
            {!domestic && <CityInformation />}
          </Suspense>
        </RetryErrorBoundary>
        <RetryErrorBoundary>
          <Suspense fallback={<WeatherSkeleton />}>
            <Weather />
          </Suspense>
        </RetryErrorBoundary>
        <RetryErrorBoundary>
          <Suspense fallback={<ExchangeRateSkeleton />}>
            {!domestic && <ExchangeRate />}
          </Suspense>
        </RetryErrorBoundary>
        <RetryErrorBoundary>
          <Suspense fallback={<TopReviewSkeleton />}>
            <CityTopReview />
          </Suspense>
        </RetryErrorBoundary>
        <RetryErrorBoundary>
          <Suspense fallback={<GallerySkeleton />}>
            <HotPlace />
          </Suspense>
        </RetryErrorBoundary>
        <Banner domestic={domestic} />
      </Styled.CityWrapper>
    </>
  );
};

export default City;
