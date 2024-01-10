import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SwiperWrap = styled(Swiper)`
  margin-top: 0.6rem;
  position: relative;
  padding: 0 1rem;
`;

export const SwiperSlideWrap = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SliderImg = styled.div`
  position: relative;
  img {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 10px;
  }
`;

export const Bookmark = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.brand.white};

  img {
    margin-right: 0.2rem;

    width: 1rem;
  }
`;

export const SliderTitle = styled.div`
  margin-top: -0.2rem;
  font-size: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding-bottom: 1rem;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
