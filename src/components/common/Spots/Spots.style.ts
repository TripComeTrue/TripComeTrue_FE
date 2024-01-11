import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SwiperWrap = styled(Swiper)`
  margin-top: 0.6rem;
  position: relative;
  padding: 0 1rem;
`;

export const SwiperSlideWrap = styled(SwiperSlide)``;

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

  div {
    svg {
      font-size: ${({ theme }) => theme.fontSizes.lg};
    }
    span {
      font-size: 10px;
    }
  }
`;

export const SliderTitle = styled.div`
  margin-top: -0.2rem;
  font-size: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding-bottom: 1rem;
  text-align: center;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const SliderTitleSortLeft = styled.div`
  margin-top: -0.2rem;
  margin-left: 0.5rem;
  font-size: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding-bottom: 1rem;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
