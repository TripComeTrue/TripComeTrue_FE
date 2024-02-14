import { Skeleton } from '@mui/material';
import TripCarouselSkeleton from '../../TripHome/TripCarousel/TripCarouselSkeleton';
import * as Styled from './OtherTripRecords.styles';

const OtherTripRecordsSkeleton = () => {
  return (
    <Styled.Container>
      <Skeleton
        variant="text"
        width="12rem"
        sx={{ fontSize: '2rem', marginBottom: '0.875rem' }}
      />
      <TripCarouselSkeleton />
    </Styled.Container>
  );
};

export default OtherTripRecordsSkeleton;
