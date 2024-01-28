import { Skeleton } from '@mui/material';
import * as Styled from './TripCarousel.styles';

const TripCarouselSkeleton = () => {
  return (
    <Styled.Container spaceBetween={10} slidesPerView={2.3}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Styled.Slide $size="9rem" key={index}>
          <Skeleton
            variant="rounded"
            height="9.5rem"
            sx={{ borderRadius: '0.625rem', minWidth: '9rem' }}
          />
        </Styled.Slide>
      ))}
    </Styled.Container>
  );
};

export default TripCarouselSkeleton;
