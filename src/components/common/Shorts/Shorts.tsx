import { SwiperProps, Slide, ShortsProps } from './Shorts.types';
import ShortsSwiper from './ShortsSwiper';

import * as Styled from './Shorts.style';

const Shorts: React.FC<SwiperProps & ShortsProps> = ({
  slides,
  slidesPerView = 2.1,
}) => (
  <Styled.SwiperWrap
    spaceBetween={8}
    slidesPerView={slidesPerView}
    direction="horizontal"
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true, el: '.swiper-scrollbar', hide: false }}>
    {slides.map((slide: Slide) => (
      <ShortsSwiper
        key={slide.title}
        img={slide.img}
        title={slide.title}
        bookmark={slide.bookmark}
      />
    ))}
  </Styled.SwiperWrap>
);

export default Shorts;
