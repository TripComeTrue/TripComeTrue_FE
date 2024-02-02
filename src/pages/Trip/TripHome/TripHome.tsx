import { Suspense } from 'react';
import {
  TripHomeBody,
  TripHomeBodySkeleton,
  TripHomeHeader,
} from '@/components/Trip';
import * as Styled from './TripHome.styles';
import { RetryErrorBoundary, TabBar } from '@/components/common';
import FloatingButton from '@/components/Trip/TripHome/FloatingButton/FloatingButton';

const TripHome = () => {
  return (
    <Styled.Container>
      <TripHomeHeader />
      <RetryErrorBoundary>
        <Suspense fallback={<TripHomeBodySkeleton />}>
          <TripHomeBody />
        </Suspense>
      </RetryErrorBoundary>
      <FloatingButton />
      <TabBar />
    </Styled.Container>
  );
};

export default TripHome;
