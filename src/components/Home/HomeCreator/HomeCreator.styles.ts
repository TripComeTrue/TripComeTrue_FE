import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import theme from '@/styles/theme';

export const HotCreatorTitle = styled.div`
  position: relative;
  padding: 0.8rem 1rem 0;
  color: ${theme.brand.black};
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.bold};
  margin-left: 28.8px;

  img {
    position: absolute;
    top: 35%;
    margin-left: -27.2px;
  }
`;

export const HotPostWrap = styled.div`
  margin-top: 1.8rem;

  position: relative;
`;

export const PostUserWrap = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  &:hover p {
    text-decoration: underline;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const UserImg = styled.div`
  img {
    width: 4.125rem;
    border-radius: 50%;
  }
`;

export const UserInfo = styled.div`
  margin-left: 1rem;
  font-size: ${theme.fontSizes.sm};

  p {
    font-weight: ${theme.fontWeights.bold};
  }
`;

export const PostBackground = styled.div`
  position: absolute;
  top: 8rem;

  width: 100%;
  height: 6.5rem;

  background-color: ${theme.brand.primary};
`;

export const SwiperDiv = styled.div`
  position: relative;
  top: 0;
  left: 0;
`;

export const SwiperWrap = styled(Swiper)`
  margin-top: 0.6rem;
  margin-left: 1rem;
  position: relative;

  background-color: transparent;
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
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.brand.white};

  img {
    margin-right: 0.2rem;

    width: 1rem;
  }
`;

export const SliderTitle = styled.div`
  margin-top: -0.2rem;
  font-size: 10px;
  font-weight: ${theme.fontWeights.bold};
  padding-bottom: 1rem;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
