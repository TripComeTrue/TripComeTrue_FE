// TODO: 삭제할 예정
/* eslint-disable react/no-array-index-key */
import ShortCard from '../ShortCard/ShortCard';
import * as Styled from './ShortCarousel.styles';
import 'swiper/swiper-bundle.css';

const ShortCarousel = () => {
  return (
    <Styled.Container spaceBetween={8} slidesPerView={2.3}>
      {new Array(5).fill(0).map((_, index) => (
        <Styled.Slide key={index}>
          <ShortCard />
        </Styled.Slide>
      ))}
    </Styled.Container>
  );
};

export default ShortCarousel;
