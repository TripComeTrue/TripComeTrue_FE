import { useLocation, useParams } from 'react-router-dom';
import { Suspense } from 'react';
import {
  Banner,
  CityGallery,
  CityInformation,
  CityTopReview,
  DetailFeedShorts,
  ExchangeRate,
  HotPlace,
  Weather,
} from '@/components/DetailFeed';
import { FeedNav, RetryErrorBoundary } from '@/components/common';
import * as Styled from './City.styles';
import DetailFeedShortsSkeleton from '@/components/DetailFeed/DetailFeedShorts/DetailFeedShortsSkeleton';

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
          <Suspense>
            <CityGallery />
          </Suspense>
        </RetryErrorBoundary>
        <RetryErrorBoundary>
          <Suspense>{!domestic && <CityInformation />}</Suspense>
        </RetryErrorBoundary>
        <RetryErrorBoundary>
          <Suspense>
            <Weather />
          </Suspense>
        </RetryErrorBoundary>
        <RetryErrorBoundary>
          <Suspense>{!domestic && <ExchangeRate />}</Suspense>
        </RetryErrorBoundary>
        <RetryErrorBoundary>
          <Suspense>
            <CityTopReview />
          </Suspense>
        </RetryErrorBoundary>
        <RetryErrorBoundary>
          <Suspense>
            <HotPlace />
          </Suspense>
        </RetryErrorBoundary>
        <Banner domestic={domestic} />
      </Styled.CityWrapper>
    </>
  );
};

export default City;
