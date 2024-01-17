import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const GellaryWrapper = styled.section`
  height: 12.5rem;
`;

export const SubtitleBox = styled.div`
  padding: 0 1.25rem;
`;

export const GellaryItemBox = styled(Swiper)`
  margin: 1rem 0;
  padding: 0 1.25rem;
`;

export const GellaryItem = styled(SwiperSlide)`
  height: 9rem;
  position: relative;

  img {
    height: 100%;
    border-radius: 0.625rem;
    aspect-ratio: 1;
  }
`;

export const BookMarkBox = styled.div`
  position: absolute;
  left: 0.3rem;
`;
