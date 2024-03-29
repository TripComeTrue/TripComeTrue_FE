import { SwiperSlide } from 'swiper/react';
import ReviewSwiper from './ReviewSwiper';
import * as Styled from './Review.styles';
import { ReviewProps, SlideHotItem } from './Review.types';

/**
 * 여행 후기 공통 컴포넌트입니다.
 * @param slides 여행 후기 Wrap에 들어가야하는 제목(title), 대표 이미지(img), 북마크(number) 등이 들어있는 배열입니다. (Review.types.ts SlideHotItem참고)
 * @param slidesPerView 한 화면에 출력되는 slide 갯수
 */

const Review: React.FC<ReviewProps> = ({ slides, slidesPerView = 1.63 }) => (
  <Styled.SliderWrap
    spaceBetween={8}
    slidesPerView={slidesPerView}
    direction="horizontal"
    pagination={{ clickable: true }}
    scrollbar={{
      draggable: true,
      el: '.swiper-scrollbar',
      hide: false,
    }}>
    {slides.map((item: SlideHotItem) => (
      <SwiperSlide key={item.title}>
        <ReviewSwiper
          tripRecordId={item.tripRecordId}
          key={item.title}
          title={item.title}
          bookmark={item.bookmark}
          img={item.img}
          rate={item.rate}
          username={item.username}
          userphoto={item.userphoto}
          nights={item.nights}
          postTitle={item.postTitle}
        />
      </SwiperSlide>
    ))}
  </Styled.SliderWrap>
);

export default Review;
