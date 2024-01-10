// TODO: 주석 나중에 지울 예정
/* eslint-disable react/no-array-index-key */
import pxToRem from '@/utils/pxToRem';
import TripCard from '../TripCard/TripCard';
import * as Styled from './TripCarousel.styles';
import 'swiper/swiper-bundle.css';
import { TripCarouselProps } from './TripCarousel.types';

const TripCarousel = ({ size = 152 }: TripCarouselProps) => {
  const stringifiedSize = pxToRem(size);

  return (
    <Styled.Container spaceBetween={10} slidesPerView={2.3}>
      {new Array(5).fill(0).map((_, index) => (
        <Styled.Slide $size={stringifiedSize} key={index}>
          <TripCard size={size} />
        </Styled.Slide>
      ))}
    </Styled.Container>
  );
};

export default TripCarousel;
