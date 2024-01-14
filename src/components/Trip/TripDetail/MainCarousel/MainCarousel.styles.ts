import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Container = styled(Swiper)`
  width: 100%;
`;

export const Slide = styled(SwiperSlide)`
  position: relative;

  height: 16.875rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;
`;

export const TagWrapper = styled.div`
  position: absolute;
  top: 28%;
  left: 63%;
`;
