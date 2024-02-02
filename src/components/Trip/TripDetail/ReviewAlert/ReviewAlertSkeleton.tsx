import { Skeleton } from '@mui/material';
import * as Styled from './ReviewAlertSkeleton.styles';

const ReviewAlertSkeleton = () => {
  return (
    <Styled.Container>
      <Skeleton variant="text" width="8rem" sx={{ fontSize: '1rem' }} />
      <Styled.ReviewContainer>
        <Skeleton variant="rounded" width="5.8125rem" height="5.8125rem" />
        <Styled.ReviewContents>
          <Skeleton variant="text" width="5rem" sx={{ fontSize: '1rem' }} />
          <Skeleton variant="text" width="8rem" sx={{ fontSize: '1rem' }} />
          <Skeleton variant="text" width="8rem" sx={{ fontSize: '1rem' }} />
        </Styled.ReviewContents>
      </Styled.ReviewContainer>
      <Styled.RatingContainer>
        <Skeleton variant="rounded" width="60%" height={30} />
        <Skeleton variant="text" width="10rem" sx={{ fontSize: '1rem' }} />
      </Styled.RatingContainer>
    </Styled.Container>
  );
};

export default ReviewAlertSkeleton;
