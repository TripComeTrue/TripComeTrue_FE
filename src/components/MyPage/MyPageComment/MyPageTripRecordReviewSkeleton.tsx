import { Skeleton } from '@mui/material';
import { TripRecordReviewCard } from '@/components/common';
import * as Styled from './MyPageTripRecordReview.styles';

function MyPageTripRecordReviewSkeleton() {
  return (
    <div>
      {[1, 2].map((item) => (
        <TripRecordReviewCard key={item}>
          <Skeleton width={200} height={21} />
          <Styled.TripRecordReviewContent>
            <Skeleton variant="rounded" width={93} height={93} />
            <Styled.TripRecordReviewText>
              <Skeleton width={100} height={21} />
              <Skeleton height={21} />
              <Skeleton height={21} />
              <Skeleton height={21} />
              <Skeleton height={21} />
            </Styled.TripRecordReviewText>
          </Styled.TripRecordReviewContent>
        </TripRecordReviewCard>
      ))}
    </div>
  );
}

export default MyPageTripRecordReviewSkeleton;
