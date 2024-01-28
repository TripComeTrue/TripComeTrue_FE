import { Skeleton } from '@mui/material';
import * as Styled from './ReviewCommentSkeleton.styles';

const ReviewCommentSkeleton = () => {
  return (
    <div>
      <Styled.SkeletonReviewContainer>
        <Styled.SkeletonInfo>
          <Styled.SkeletonCreator>
            <Skeleton variant="circular" width="2rem" height="2rem" />
            <Skeleton
              variant="text"
              width="3.75rem"
              sx={{ fontSize: '1rem' }}
            />
          </Styled.SkeletonCreator>
          <Skeleton variant="text" width="3.75rem" sx={{ fontSize: '1rem' }} />
        </Styled.SkeletonInfo>
        <Skeleton variant="rounded" width="100%" height="10rem" />
        <Skeleton variant="text" width="100%" sx={{ fontSize: '1.5rem' }} />
      </Styled.SkeletonReviewContainer>
      <ul>
        {Array.from({ length: 5 }).map((_, index) => (
          <Styled.SkeletonCommentItem key={index}>
            <Styled.SkeletonInfo>
              <Styled.SkeletonCreator>
                <Skeleton variant="circular" width="2rem" height="2rem" />
                <Skeleton
                  variant="text"
                  width="3.75rem"
                  sx={{ fontSize: '1rem' }}
                />
              </Styled.SkeletonCreator>
              <Skeleton
                variant="text"
                width="3.75rem"
                sx={{ fontSize: '1rem' }}
              />
            </Styled.SkeletonInfo>
            <Skeleton variant="rounded" width="100%" height="2rem" />
          </Styled.SkeletonCommentItem>
        ))}
      </ul>
    </div>
  );
};

export default ReviewCommentSkeleton;
