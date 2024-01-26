import { Slide, ShortsProps } from './Shorts.types';
import ShortsSwiper from './ShortsSwiper';
import * as Styled from './Shorts.style';

/**
 * 쇼츠 공통 컴포넌트입니다.
 * @param slides 쇼츠에 들어가야하는 쇼츠 제목(string), 쇼츠 대표 이미지(string), 쇼츠 북마크(number) 등이 들어있는 배열입니다.
 * @param slidesPerView 한 화면에 출력되는 slide 갯수
 */

const Shorts: React.FC<ShortsProps> = ({ slides, slidesPerView = 2.1 }) => (
  <Styled.SwiperWrap
    spaceBetween={8}
    slidesPerView={slidesPerView}
    direction="horizontal"
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true, el: '.swiper-scrollbar', hide: false }}>
    {slides.map((slide: Slide) => (
      <Styled.SwiperSlideWrap key={slide.tripRecordTitle}>
        <ShortsSwiper
          thumbnailUrl={slide.thumbnailUrl}
          tripRecordTitle={slide.tripRecordTitle}
          storedCount={slide.storedCount}
          tripRecordId={slide.tripRecordId}
        />
      </Styled.SwiperSlideWrap>
    ))}
  </Styled.SwiperWrap>
);

export default Shorts;
