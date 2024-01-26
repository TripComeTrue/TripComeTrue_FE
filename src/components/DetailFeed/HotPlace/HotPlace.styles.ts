import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { alignCenter } from '@/styles/common';

export const SubTitleBox = styled.div`
  padding: 0 1.25rem;
`;

export const PlaceBox = styled(Swiper)`
  margin-top: 1.5rem;
  padding: 0 1.25rem;
`;

export const PlaceItem = styled(SwiperSlide)`
  width: 9.5rem;
  position: relative;
  cursor: pointer;
  img {
    width: 100%;
    height: 9.5rem;
    border-radius: 0.625rem;
  }
`;

export const BookMarkBox = styled.div`
  position: absolute;
  left: 0.3rem;
`;

export const ItemBottom = styled.div`
  ${alignCenter}
  justify-content: space-between;

  padding: 0 0.4rem;
`;

export const ReviewBox = styled.div`
  ${alignCenter}
  gap: 0.3rem;
  img {
    width: 0.8rem;
    height: 0.8rem;
  }
`;
