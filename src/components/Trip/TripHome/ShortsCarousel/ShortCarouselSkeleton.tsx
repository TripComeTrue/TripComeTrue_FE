import { Skeleton } from '@mui/material';
import * as Styled from './ShortsCarousel.styles';

const ShortCarouselSkeleton = () => {
  return (
    <Styled.Container spaceBetween={8} slidesPerView={2.3}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Styled.Slide key={index}>
          <Skeleton
            variant="rounded"
            height="13.625rem"
            sx={{ borderRadius: '0.625rem', minWidth: '9.5625rem' }}
          />
        </Styled.Slide>
      ))}
    </Styled.Container>
  );
};

export default ShortCarouselSkeleton;
