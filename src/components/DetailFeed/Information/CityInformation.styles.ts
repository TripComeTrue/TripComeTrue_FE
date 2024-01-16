import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { alignCenter } from '@/styles/common';

export const InformationWrapper = styled.section`
  height: 11rem;
`;

export const InformationBox = styled(Swiper)`
  margin-top: 1rem;
`;

export const InformationItem = styled(SwiperSlide)`
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 0.625rem;

  ${alignCenter}
  flex-direction: column;
  gap: 1.125rem;

  padding: 1.125rem 2rem;

  background-color: ${({ theme }) => theme.brand.lightGray};

  span {
    white-space: nowrap;
  }
`;

export const InformationIconBox = styled.div`
  width: 3.75rem;
  height: 3.75rem;

  display: flex;
  justify-content: center;
`;

export const InformationIcon = styled.img`
  width: 3rem;
  height: 3rem;

  border-radius: 50%;
`;
