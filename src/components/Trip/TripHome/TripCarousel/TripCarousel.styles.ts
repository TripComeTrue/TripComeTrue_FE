import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Container = styled(Swiper)``;

export const Slide = styled(SwiperSlide)<{ $size: string }>`
  min-width: ${({ $size }) => $size};
`;
