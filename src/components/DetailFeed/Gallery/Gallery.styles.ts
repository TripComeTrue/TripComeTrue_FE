import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const GellaryWrapper = styled.section`
  margin-top: 1rem;
`;

export const SubtitleBox = styled.div`
  padding: 0 1.25rem;
`;

export const GellaryItemBox = styled(Swiper)`
  margin-top: 1rem;
  padding: 0 1.25rem;
`;

export const GellaryItem = styled(SwiperSlide)`
  position: relative;
  width: 9rem;

  img {
    width: 100%;
    border-radius: 0.625rem;
  }
`;

export const BookMarkBox = styled.div`
  position: absolute;
  left: 0.3rem;
`;
