import { Suspense } from 'react';
import { TripPlanPosting } from '@/components/Trip/TripPlan';
import { RetryErrorBoundary } from '@/components/common';

const TripPlanRecord = () => {
  return (
    <RetryErrorBoundary>
      <Suspense fallback={<div>loading...</div>}>
        <TripPlanPosting />
      </Suspense>
    </RetryErrorBoundary>
  );
};

export default TripPlanRecord;
