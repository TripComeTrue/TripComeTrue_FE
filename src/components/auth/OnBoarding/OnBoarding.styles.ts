import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '@/components/common/Container';

export const OnBoardWrap = styled.div`
  padding-top: 3rem;
  max-height: 100vh;
`;

export const OnBoardTitle = styled.div`
  text-align: center;
  padding: 2.125rem 0 0;
`;

export const OnBoardSwiper = styled(Swiper)`
  & .swiper-pagination {
    top: 0;
    bottom: auto;
  }
  &.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
  &
    .swiper-pagination-horizontal.swiper-pagination-bullets
    .swiper-pagination-bullet {
    margin: 0 0.375rem;
  }
  & .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.text.gray};
  }
`;

export const OnBoardSwiperSlide = styled(SwiperSlide)`
  img {
    width: 100%;
  }
`;

export const OnBoardBtn = styled(Container)`
  padding: 0.5rem 1.25rem;
`;
