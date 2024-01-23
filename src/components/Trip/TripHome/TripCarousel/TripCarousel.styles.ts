import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Container = styled(Swiper)`
  width: 100%;
`;

export const Slide = styled(SwiperSlide)<{ $size: string }>`
  cursor: pointer;
  min-width: ${({ $size }) => $size};
`;
