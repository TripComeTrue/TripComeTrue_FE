import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SwiperWrap = styled(Swiper)`
  padding: 1.1rem 1rem 1.6rem;
`;

export const SwiperSlideWrap = styled(SwiperSlide)``;

// 이게 콘텐츠
export const SliderContent = styled.div`
  position: relative;
  aspect-ratio: 9/16;
  cursor: pointer;

  border-radius: 10px;
`;

export const SliderBackground = styled.div`
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
    aspect-ratio: 9/16;
  }
`;

export const Bookmark = styled.div`
  margin-left: 0.6rem;
  position: absolute;
  top: 0.5rem;

  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.brand.white};
`;

export const ShortTitle = styled.div`
  padding-left: 0.7rem;
  position: absolute;
  bottom: 0;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 2rem;

  font-size: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  border-radius: 0 0 1rem 1rem;
  background-color: rgba(0, 0, 0, 0.4);
  color: ${({ theme }) => theme.brand.white};

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
