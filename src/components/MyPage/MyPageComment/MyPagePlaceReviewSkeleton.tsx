import { Skeleton } from '@mui/material';
import { PlaceReviewCard } from '@/components/common';
import * as Styled from './MyPagePlaceReview.styles';

function MyPagePlaceReviewSkeleton() {
  return (
    <div>
      {[1, 2].map((item) => (
        <PlaceReviewCard key={item}>
          <div>
            <Styled.PlaceReviewSkeletonHeader>
              <Skeleton variant="circular" width={32} height={32} />
              <Skeleton width={60} height={21} />
            </Styled.PlaceReviewSkeletonHeader>
            <Skeleton width={60} height={18} sx={{ margin: '3px 0' }} />
          </div>
          <Styled.PlaceReviewSkeletonImg>
            <Skeleton
              variant="rounded"
              sx={{ width: '100%', height: '100%' }}
            />
          </Styled.PlaceReviewSkeletonImg>
          <div>
            <Skeleton height={21} />
            <Skeleton height={21} />
            <Skeleton width={160} height={21} />
          </div>
          <Styled.PlaceReviewSkeletonBtns>
            <Skeleton width={50} height={22} />
            <Skeleton width={32} height={22} />
          </Styled.PlaceReviewSkeletonBtns>
        </PlaceReviewCard>
      ))}
    </div>
  );
}

export default MyPagePlaceReviewSkeleton;
