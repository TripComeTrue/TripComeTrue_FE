import { Suspense } from 'react';
import { RetryErrorBoundary } from '@/components/common';
import TripPlanPostingPlanRecord from '@/components/Trip/TripPlan/TripPlanPostingPlan/TripPlanPostingPlanRecord';

const TripPlanRecord = () => {
  return (
    <RetryErrorBoundary>
      <Suspense fallback={<div>loading...</div>}>
        <TripPlanPostingPlanRecord />
      </Suspense>
    </RetryErrorBoundary>
  );
};

export default TripPlanRecord;
