import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { alignCenter, flexColumn } from '@/styles/common';

export const Container = styled.div`
  ${flexColumn}

  margin-left: 1.25rem;
`;

export const ScheduleContainer = styled.div`
  padding-bottom: 0.6875rem;
  border-bottom: 1px solid ${({ theme }) => theme.brand.gray};

  margin: 0 1.25rem 1rem 0;
`;

export const DayTitle = styled.div`
  font-family: 'Mundial-Demibold', 'SF-Pro', sans-serif;
  font-size: 1.125rem;
  margin-bottom: 0.875rem;
`;

export const PlaceList = styled.ul`
  ${flexColumn};
  gap: 1.5rem;

  margin-bottom: 1.5rem;
`;

export const PlaceItem = styled.li`
  ${flexColumn};
  gap: 1.5rem;
`;

export const PlaceContainer = styled.div`
  display: flex;
  gap: 0.875rem;

  margin-right: 1.25rem;
`;

export const Side = styled.div`
  ${flexColumn}
`;

export const PlaceNumber = styled.div`
  ${alignCenter};
  justify-content: center;

  width: 1.75rem;
  height: 1.75rem;
  background-color: ${({ theme }) => theme.brand.black};
  color: ${({ theme }) => theme.brand.white};
  border-radius: 50%;
  font-family: 'Mundial-Demibold', 'SF-Pro', sans-serif;
`;

export const HLine = styled.div`
  width: 0.875rem;
  height: 100%;
  border-right: 1px dashed ${({ theme }) => theme.text.gray};
`;

export const PlaceContents = styled.div`
  ${flexColumn}
  gap: 0.5rem;
`;

export const PlaceTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text.black};
`;

export const PlaceTextWrapper = styled.div`
  height: 6.5625rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.125rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) =>
      theme.brand.subBlack}; /* 스크롤바 색상 */
    border-radius: 1.125rem; /* 스크롤바 둥근 테두리 */
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) =>
      theme.brand.gray}; /*스크롤바  뒷 배경 색상*/
  }
`;

export const PlaceCarousel = styled(Swiper)`
  width: 100%;
  height: 100%;
`;

export const PlaceSlide = styled(SwiperSlide)`
  width: 9rem;
  height: 9rem;
  border-radius: 0.625rem;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;
`;

export const ButtonWrapper = styled.div`
  margin-right: 1.25rem;
`;

export const CopyButton = styled.button`
  ${alignCenter};
  justify-content: center;
  gap: 0.25rem;

  width: 100%;
  padding: 0.5625rem 0;
  background-color: ${({ theme }) => theme.brand.black};
  border-radius: 1.875rem;
`;

export const IconImage = styled.img`
  width: 1.0625rem;
  height: 1.0625rem;
`;
