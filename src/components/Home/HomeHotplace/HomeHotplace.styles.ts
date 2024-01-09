import { Swiper } from 'swiper/react';
import styled from 'styled-components';
import { LabelProps } from './HomeHotplace.types';
// import theme from '@/styles/theme';

export const HotplaceWrap = styled.div`
  background-color: #1e1e1e;
  padding-bottom: 1.7rem;
`;

export const HotplaceTitle = styled.div`
  position: relative;
  padding: 2rem 1rem 0;
  color: ${({ theme }) => theme.brand.white};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-left: 1.8rem;

  img {
    position: absolute;
    top: 48%;
    margin-left: -1.7rem;
  }
`;

export const PopularWrap = styled.div`
  margin: 0.8rem 1rem 0;
`;

export const PlaceWrap = styled.div`
  margin: 0.6rem 1rem 0;
`;

export const Label = styled.label<LabelProps>`
  margin-right: 0.4rem;
  padding: 0.3rem 0.9rem;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  background-color: ${(props) =>
    props.checked
      ? ({ theme }) => theme.brand.primary
      : ({ theme }) => theme.brand.white};
  border-radius: 1rem;
`;

export const SliderWrap = styled(Swiper)`
  margin: 1rem 1rem 0;
`;

// 인기 여행 도시 부분
export const HotplaceCityWrap = styled.div`
  margin-bottom: 0.4rem;

  position: relative;

  background: transparent;

  aspect-ratio: 1;
`;

export const HotplaceCityImg = styled.div`
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

export const Gradient = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
`;

export const HotplaceCityBookmark = styled.div`
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

export const HotplaceCityTag = styled.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translate(-50%, 0);

  text-align: center;
  color: ${({ theme }) => theme.brand.white};
`;

export const HotplaceCityTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  line-height: 0.7;
`;

export const HotplaceCitySubtitle = styled.div`
  font-family: 'Mundial-Demibold', 'SF-Pro', sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-transform: uppercase;
`;

// 인기 여행 후기 부분
export const HotplaceReviewWrap = styled.div``;

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

export const HotplaceSpot = styled.div`
  position: absolute;
  top: 0.6rem;
  right: 0.8rem;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  color: ${({ theme }) => theme.brand.white};

  p {
    display: flex;

    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    text-transform: uppercase;

    img {
      position: absolute;
      left: -1.35rem;
      top: 0.15rem;
      margin-right: 0.2rem;
      width: 1.2rem;
    }
  }

  div {
    line-height: 1.2;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  }
`;

export const HotplaceDesWrap = styled.div`
  background-color: ${({ theme }) => theme.brand.white};
  position: absolute;
  bottom: 0.3rem;

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

export const GoAllCity = styled.div`
  padding: 2rem 1.4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
