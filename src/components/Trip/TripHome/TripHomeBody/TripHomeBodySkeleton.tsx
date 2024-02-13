import { Skeleton } from '@mui/material';
import * as Styled from './TripHomeBody.styles';
import TripCarouselSkeleton from '../TripCarousel/TripCarouselSkeleton';

const TripHomeBodySkeleton = () => {
  return (
    <Styled.Container>
      <div>
        <Skeleton
          variant="text"
          width="12rem"
          sx={{ fontSize: '2rem', marginBottom: '0.875rem' }}
        />
        <TripCarouselSkeleton />
      </div>
      <div>
        <Skeleton
          variant="text"
          width="12rem"
          sx={{ fontSize: '2rem', marginBottom: '0.875rem' }}
        />
        <Skeleton
          variant="rounded"
          height="12.5rem"
          sx={{
            borderRadius: ' 0.625rem 0 0 0.625rem',
            marginBottom: '1.5rem',
          }}
        />
        <TripCarouselSkeleton />
      </div>
      <div>
        <Skeleton
          variant="text"
          width="12rem"
          sx={{ fontSize: '2rem', marginBottom: '0.875rem' }}
        />
        <Skeleton
          variant="rounded"
          height="12.5rem"
          sx={{
            borderRadius: ' 0.625rem 0 0 0.625rem',
            marginBottom: '1.5rem',
          }}
        />
        <TripCarouselSkeleton />
      </div>
    </Styled.Container>
  );
};

export default TripHomeBodySkeleton;
