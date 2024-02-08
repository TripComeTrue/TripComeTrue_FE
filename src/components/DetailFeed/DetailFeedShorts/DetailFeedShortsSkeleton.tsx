import { Skeleton } from '@mui/material';
import * as Styled from './DetailFeedShorts.styles';

const DetailFeedShortsSkeleton = () => {
  return (
    <Styled.DetailFeedShortsWrapper>
      <Styled.SubTitleBox>
        <Skeleton variant="text" sx={{ fontSize: '1.5rem' }} />
      </Styled.SubTitleBox>
      <Styled.SkeletonShortsBox>
        {[1, 2].map((item) => (
          <Skeleton
            key={item}
            variant="rectangular"
            width="9.5rem"
            height="16.875rem"
            sx={{ borderRadius: '0.625rem' }}
          />
        ))}
      </Styled.SkeletonShortsBox>
    </Styled.DetailFeedShortsWrapper>
  );
};

export default DetailFeedShortsSkeleton;
