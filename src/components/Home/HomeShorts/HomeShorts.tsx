import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import theme from '@/styles/theme';
import 'swiper/swiper-bundle.css';

const SwiperSlideWrap = styled(SwiperSlide)``;

const SliderContent = styled.div`
  height: 30rem;
  background-color: ${theme.brand.primary};
`;

const HomeShorts = () => {
  return (
    <div>
      <div>지금 이 순간, 트립컴트루</div>
      <Swiper
        spaceBetween={50}
        slidesPerView={2.5}
        direction="horizontal"
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}>
        <SwiperSlideWrap>
          <SliderContent>slide 1</SliderContent>
        </SwiperSlideWrap>
        <SwiperSlideWrap>Slide 2</SwiperSlideWrap>
        <SwiperSlideWrap>Slide 3</SwiperSlideWrap>
        <SwiperSlideWrap>Slide 4</SwiperSlideWrap>
        <SwiperSlideWrap>Slide 5</SwiperSlideWrap>
      </Swiper>
    </div>
  );
};

export default HomeShorts;
