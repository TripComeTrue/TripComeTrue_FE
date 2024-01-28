import { Skeleton } from '@mui/material';
import * as Styled from './TripContents.styles';

const TripContentsSkeleton = () => {
  return (
    <Styled.Container>
      <Skeleton variant="rectangular" width="100%" height="11.25rem" />
      <Styled.DayButtonList>
        <Skeleton variant="rectangular" width="3.75rem" height="1.375rem" />
        <Skeleton variant="rectangular" width="3.75rem" height="1.375rem" />
        <Skeleton variant="rectangular" width="3.75rem" height="1.375rem" />
      </Styled.DayButtonList>
      <Styled.SkeletonWrapper>
        <Skeleton variant="rectangular" width="100%" height="25rem" />
      </Styled.SkeletonWrapper>
    </Styled.Container>
  );
};

export default TripContentsSkeleton;
