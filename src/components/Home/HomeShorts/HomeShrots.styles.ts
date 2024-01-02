import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LabelProps } from './HomeShorts.types';
import theme from '@/styles/theme';

export const ShortsWrap = styled.div`
  margin-top: 4rem;
`;

export const ShortsTitle = styled.div`
  margin-left: 7rem;
  position: relative;
  font-size: 1.9rem;
  font-weight: ${theme.fontWeights.bold};

  img {
    width: 2rem;
    position: absolute;
    left: -3rem;
    top: 0.2em;
  }
`;

export const ShortsRadio = styled.div`
  margin: 1.5rem 4rem 0;
`;

export const Label = styled.label<LabelProps>`
  margin-right: 0.8rem;
  padding: 0.2rem 1.3rem;
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.bold};
  background-color: ${(props) =>
    props.checked ? theme.brand.primary : 'transparent'};
  border: 0.06rem solid ${theme.brand.primary};
  border-radius: 1rem;
`;

export const SwiperWrap = styled(Swiper)`
  padding: 1.5rem 4rem 0;
`;

export const SwiperSlideWrap = styled(SwiperSlide)``;

// 이게 콘텐츠
export const SliderContent = styled.div`
  position: relative;
  height: 35rem;

  border-radius: 1rem;
`;

export const SliderBackground = styled.div`
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 1rem;
  }
`;

export const Bookmark = styled.div`
  margin-left: 3.3rem;
  position: absolute;
  top: 1rem;

  font-size: ${theme.fontSizes.md};
  color: ${theme.brand.white};

  img {
    position: absolute;
    left: -2.1rem;
    width: 1.7rem;
  }
`;

export const ShortTitle = styled.div`
  padding-left: 1rem;
  position: absolute;
  bottom: 0;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 4rem;

  border-radius: 0 0 1rem 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: ${theme.brand.white};
`;
