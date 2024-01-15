import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SliderWrap = styled(Swiper)`
  padding: 1rem 1rem 0;
`;

// 인기 여행 후기 부분
export const HotplaceReviewWrap = styled(SwiperSlide)``;

export const HotplaceImg = styled.div`
  position: relative;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 0.625rem;
    aspect-ratio: 1;
  }
`;

export const GradientReview = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent);
  border-radius: 10px;
`;

export const HotplaceBookmark = styled.div`
  position: absolute;
  top: 0.7rem;
  left: 1.8rem;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.brand.white};

  img {
    position: absolute;
    top: 0.1rem;
    left: -1.2rem;
    width: 1.1rem;
  }
`;

export const HotplaceDesWrap = styled.div`
  background-color: ${({ theme }) => theme.brand.white};
  position: absolute;
  bottom: 0;

  padding: 0.6rem;
  width: 100%;
  height: 3.3rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border-radius: 0 0 10px 10px;
`;

export const DesNightPlace = styled.div`
  display: flex;
  flex-direction: column;

  div {
    color: #626262;
    font-size: 0.625rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;

export const DesRate = styled.div`
  position: relative;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  img {
    position: absolute;
    left: -1.6rem;

    width: 1.4rem;
  }
`;

export const UserInfo = styled.div`
  position: absolute;
  top: -1.3rem;
  left: 0;
  padding: 0.2rem 0.7rem 0.15rem 0.3rem;

  display: flex;

  font-size: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.brand.white};
  background-color: ${({ theme }) => theme.brand.black};
  border-radius: 0 0.25rem 0 0;

  img {
    margin-right: 0.2rem;
    width: 0.9rem;
    border-radius: 50%;
    aspect-ratio: 1;
  }
`;
