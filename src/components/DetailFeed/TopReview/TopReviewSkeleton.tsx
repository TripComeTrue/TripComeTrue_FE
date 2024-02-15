import { Skeleton } from '@mui/material';
import * as Styled from './TopReview.styles';

const TopReviewSkeleton = () => {
  return (
    <Styled.TopReviewSkeletonWrapper>
      <Skeleton variant="text" width={200} height={40} />
      <Styled.SkeletonDayOptions>
        {[1, 2, 3].map((item) => (
          <Skeleton key={item} variant="rounded" width={70} height={24} />
        ))}
      </Styled.SkeletonDayOptions>
      <Styled.SkeletonTopReviews>
        {[1, 2].map((item) => (
          <Skeleton key={item} variant="rounded" width={193} height={200} />
        ))}
      </Styled.SkeletonTopReviews>
    </Styled.TopReviewSkeletonWrapper>
  );
};

export default TopReviewSkeleton;
