import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LabelProps } from './HomeShorts.types';
import theme from '@/styles/theme';

export const ShortsWrap = styled.div`
  margin-top: 2.5rem;
`;

export const ShortsTitle = styled.div`
  margin-left: 2.8rem;
  position: relative;
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.bold};

  img {
    width: 1.5rem;
    position: absolute;
    left: -1.9rem;
    top: 0.1rem;
  }
`;

export const ShortsRadio = styled.div`
  margin: 0.8rem 1rem 0;
`;

export const Label = styled.label<LabelProps>`
  margin-right: 0.5rem;
  padding: 0.3rem 1.1rem;
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.bold};
  background-color: ${(props) =>
    props.checked ? theme.brand.primary : 'transparent'};
  border: ${(props) =>
    props.checked
      ? `0.1rem solid ${theme.brand.primary}`
      : `0.1rem solid ${theme.brand.gray}`};

  border-radius: 1rem;
`;

export const SwiperWrap = styled(Swiper)`
  padding: 1.1rem 1rem 1.6rem;
`;

export const SwiperSlideWrap = styled(SwiperSlide)``;

// 이게 콘텐츠
export const SliderContent = styled.div`
  position: relative;
  aspect-ratio: 9/16;

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
  margin-left: 1.8rem;
  position: absolute;
  top: 0.5rem;

  font-size: 10px;
  font-weight: ${theme.fontWeights.semiBold};
  color: ${theme.brand.white};

  img {
    position: absolute;
    left: -1.3rem;
    width: 16px;
  }
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
  font-weight: ${theme.fontWeights.bold};
  border-radius: 0 0 1rem 1rem;
  background-color: rgba(0, 0, 0, 0.4);
  color: ${theme.brand.white};

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
