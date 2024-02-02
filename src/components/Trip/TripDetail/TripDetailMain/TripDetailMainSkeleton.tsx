import { Skeleton } from '@mui/material';
import IntroductionSkeleton from '../Introduction/IntroductionSkeleton';
import TripContentsSkeleton from '../TripContents/TripContentsSkeleton';
import * as Styled from './TripDetailMain.styles';

const TripDetailMainSkeleton = () => {
  return (
    <Styled.Container>
      <Skeleton variant="rectangular" height="16.875rem" />
      <IntroductionSkeleton />
      <TripContentsSkeleton />
    </Styled.Container>
  );
};

export default TripDetailMainSkeleton;
