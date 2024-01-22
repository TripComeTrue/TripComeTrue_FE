import pxToRem from '@/utils/pxToRem';
import TripCard from '../TripCard/TripCard';
import * as Styled from './TripCarousel.styles';
import 'swiper/swiper-bundle.css';
import { TripCarouselProps } from './TripCarousel.types';

const TripCarousel = ({ size = 144, tripRecordsData }: TripCarouselProps) => {
  const stringifiedSize = pxToRem(size);

  return (
    <Styled.Container spaceBetween={10} slidesPerView={2.3}>
      {tripRecordsData?.map((data) => (
        <Styled.Slide $size={stringifiedSize} key={data.tripRecordId}>
          <TripCard size={size} tripRecordData={data} />
        </Styled.Slide>
      ))}
    </Styled.Container>
  );
};

export default TripCarousel;
