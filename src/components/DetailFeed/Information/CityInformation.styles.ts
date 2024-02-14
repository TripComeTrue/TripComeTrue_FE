import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { alignCenter } from '@/styles/common';

export const InformationWrapper = styled.section`
  height: 11rem;
`;

export const InformationBox = styled(Swiper)`
  padding: 0 1.25rem;
  margin-top: 1rem;
`;

export const SubTitleBox = styled.div`
  padding: 0 1.25rem;
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

export const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  padding: 0 1.25rem;
`;

export const SkeletonBox = styled.div`
  display: flex;
  gap: 0.7rem;
`;
