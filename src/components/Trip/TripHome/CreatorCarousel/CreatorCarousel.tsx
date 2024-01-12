// TODO: 나중에 삭제 예정
/* eslint-disable react/no-array-index-key */
import { Swiper, SwiperSlide } from 'swiper/react';
import * as Styled from './CreatorCarousel.styles';
import 'swiper/swiper-bundle.css';
import { Avatar, Text } from '@/components/common';

const CreatorCarousel = () => {
  return (
    <Swiper spaceBetween={10} slidesPerView={4.2}>
      {new Array(5).fill(0).map((_, index) => (
        <SwiperSlide key={index}>
          <Styled.CreatorCard>
            <Avatar src="https://source.unsplash.com/random" />
            <Text fontSize={10} fontWeight={700}>
              류스나
            </Text>
          </Styled.CreatorCard>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CreatorCarousel;
