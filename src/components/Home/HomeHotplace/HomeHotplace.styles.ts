import { Swiper } from 'swiper/react';
import styled from 'styled-components';
import { LabelProps } from './HomeHotplace.types';
import theme from '@/styles/theme';

export const HotplaceWrap = styled.div`
  background-color: #1e1e1e;
  padding-bottom: 1.6rem;
`;

export const HotplaceTitle = styled.div`
  position: relative;
  padding: 32px 16px 0;
  color: ${theme.brand.white};
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.bold};
  margin-left: 28.8px;

  img {
    position: absolute;
    top: 48%;
    margin-left: -27.2px;
  }
`;

export const PopularWrap = styled.div`
  margin: 12.8px 16px 0;
`;

export const PlaceWrap = styled.div`
  margin: 9.6px 16px 0;
`;

export const Label = styled.label<LabelProps>`
  margin-right: 6.4px;
  padding: 4.8px 14.4px;
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.bold};
  background-color: ${(props) =>
    props.checked ? theme.brand.primary : theme.brand.white};
  border-radius: 16px;
`;

export const SliderWrap = styled(Swiper)`
  margin: 16px 16px 0;
`;

// 인기 여행 도시 부분
export const HotplaceCityWrap = styled.div`
  margin-bottom: 7px;

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
  top: 11.2px;
  left: 28.8px;
  font-size: ${theme.fontSizes.xs};
  color: ${theme.brand.white};

  img {
    position: absolute;
    top: 1.6px;
    left: -19.2px;
    width: 17.6px;
  }
`;

export const HotplaceCityTag = styled.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translate(-50%, 0);

  text-align: center;
  color: ${theme.brand.white};
`;

export const HotplaceCityTitle = styled.div`
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.semiBold};
  line-height: 0.7;
`;

export const HotplaceCitySubtitle = styled.div`
  font-family: 'Mundial-Demibold', 'SF-Pro', sans-serif;
  font-size: ${theme.fontSizes.xxl};
  font-weight: ${theme.fontWeights.bold};
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
  top: 11.2px;
  left: 28.8px;
  font-size: ${theme.fontSizes.xs};
  color: ${theme.brand.white};

  img {
    position: absolute;
    top: 1.6px;
    left: -19.2px;
    width: 17.6px;
  }
`;

export const HotplaceSpot = styled.div`
  position: absolute;
  top: 9.6px;
  right: 12.8px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  color: ${theme.brand.white};

  p {
    display: flex;

    font-size: ${theme.fontSizes.lg};
    font-weight: ${theme.fontWeights.semiBold};
    text-transform: uppercase;

    img {
      position: absolute;
      left: -21.6px;
      top: 2.4px;
      margin-right: 3.2px;
      width: 19.2px;
    }
  }

  div {
    line-height: 1.2;
    font-size: ${theme.fontSizes.sm};
    font-weight: ${theme.fontWeights.semiBold};
  }
`;

export const HotplaceDesWrap = styled.div`
  background-color: ${theme.brand.white};
  position: absolute;
  bottom: 8px;

  padding: 9.6px;
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
    font-weight: ${theme.fontWeights.bold};
  }

  p {
    font-size: ${theme.fontSizes.xs};
    font-weight: ${theme.fontWeights.bold};
  }
`;

export const DesRate = styled.div`
  position: relative;
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.bold};

  img {
    position: absolute;
    left: -25.6px;

    width: 22.4px;
  }
`;

export const UserInfo = styled.div`
  position: absolute;
  top: -1.3rem;
  left: 0;
  padding: 0.2rem 0.7rem 0.15rem 0.3rem;

  display: flex;

  font-size: 10px;
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.brand.white};
  background-color: ${theme.brand.black};
  border-radius: 0 4px 0 0;

  img {
    margin-right: 0.2rem;
    width: 0.9rem;
    border-radius: 50%;
    aspect-ratio: 1;
  }
`;
