import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { DayOptionType } from './TopReview.types';

export const TopReviewWrapper = styled.section``;

export const SubTitleBox = styled.div`
  padding: 0 1.25rem;
`;

export const TopReviewItemBox = styled(Swiper)`
  margin: 1rem 0;
  padding: 0 1.25rem;
`;

export const TopReviewItem = styled(SwiperSlide)`
  width: 100%;
`;

export const DayOptions = styled.div`
  height: 1.5rem;

  display: flex;
  gap: 0.5rem;

  padding: 0 1.25rem;
  margin: 1rem 0;
`;

export const DayOption = styled.div<DayOptionType>`
  display: flex;
  align-items: center;

  border: 1px solid ${(props) => (props.selected ? 'white' : '#e2e2e2')};
  border-radius: 1.875rem;

  padding: 0.13rem 0.9rem;

  cursor: pointer;

  background-color: ${(props) =>
    props.selected
      ? ({ theme }) => theme.brand.primary
      : ({ theme }) => theme.brand.white};
`;
