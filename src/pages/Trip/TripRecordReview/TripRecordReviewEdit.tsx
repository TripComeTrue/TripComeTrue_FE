import { Suspense } from 'react';
import { Edit } from '@/components/Trip';
import { RetryErrorBoundary, Spinners } from '@/components/common';

const TripRecordReviewEdit = () => {
  return (
    <RetryErrorBoundary>
      <Suspense fallback={<Spinners />}>
        <Edit />
      </Suspense>
    </RetryErrorBoundary>
  );
};

export default TripRecordReviewEdit;
