import { Suspense } from 'react';
import { RetryErrorBoundary, SimpleNav } from '@/components/common';
import * as Styled from './TripDetail.styles';
import {
  ReviewAlert,
  ReviewAlertSkeleton,
  TripComment,
  TripDetailMain,
  TripDetailMainSkeleton,
} from '@/components/Trip';
import { getCookie } from '@/utils/cookie';
import OtherTripRecords from '@/components/Trip/TripDetail/OtherTripRecords/OtherTripRecords';
import OtherTripRecordsSkeleton from '@/components/Trip/TripDetail/OtherTripRecords/OtherTripRecordsSkeleton';

const TripDetail = () => {
  const isSignIn = getCookie('accessToken');

  return (
    <div>
      <SimpleNav>여행후기</SimpleNav>
      <Styled.Container>
        <RetryErrorBoundary>
          <Suspense fallback={<TripDetailMainSkeleton />}>
            <TripDetailMain />
          </Suspense>
        </RetryErrorBoundary>
        <TripComment />

        {isSignIn && (
          <RetryErrorBoundary>
            <Suspense fallback={<ReviewAlertSkeleton />}>
              <ReviewAlert />
            </Suspense>
          </RetryErrorBoundary>
        )}
        <RetryErrorBoundary>
          <Suspense fallback={<OtherTripRecordsSkeleton />}>
            <OtherTripRecords />
          </Suspense>
        </RetryErrorBoundary>
      </Styled.Container>
    </div>
  );
};

export default TripDetail;
