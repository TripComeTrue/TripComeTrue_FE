import ShortCard from '../ShortCard/ShortCard';
import * as Styled from './ShortsCarousel.styles';
import 'swiper/swiper-bundle.css';
import { ShortsCarouselProps } from './ShortsCarousel.types';

const ShortsCarousel = ({ shortsData }: ShortsCarouselProps) => {
  return (
    <Styled.Container spaceBetween={8} slidesPerView={2.3}>
      {shortsData?.map((shortData) => (
        <Styled.Slide key={shortData.videoId}>
          <ShortCard shortData={shortData} />
        </Styled.Slide>
      ))}
    </Styled.Container>
  );
};

export default ShortsCarousel;
