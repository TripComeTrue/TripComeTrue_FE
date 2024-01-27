import { Suspense } from 'react';
import { RetryErrorBoundary } from '@/components/common';
import TripPlanPostingPlanRecord from '@/components/Trip/TripPlan/TripPlanPostingPlanRecord/TripPlanPostingPlanRecord';

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
