import { Skeleton } from '@mui/material';
import * as Styled from './FeedNav.styles';

const FeedNavSkeleton = () => {
  return (
    <Styled.SkeletonFeedNavWrapper>
      <Skeleton variant="circular" width={20} height={20} />
      <Styled.SkeletonFeedNavTitle>
        <Skeleton variant="text" width={200} height={40} />
      </Styled.SkeletonFeedNavTitle>
      <Styled.SkeletonFeedNavRight>
        <Skeleton variant="circular" width={20} height={20} />
        <Skeleton variant="circular" width={20} height={20} />
      </Styled.SkeletonFeedNavRight>
    </Styled.SkeletonFeedNavWrapper>
  );
};

export default FeedNavSkeleton;
