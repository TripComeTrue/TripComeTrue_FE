import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const HomeMDComponent = styled.div`
  margin-top: 3rem;
`;

export const HomeMDWrap = styled.div`
  margin-bottom: 2rem;
`;

export const SwiperLeftWrap = styled.div``;

export const SwiperWrap = styled(Swiper)`
  padding: 0 1rem;
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
  top: 0.4rem;
  left: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.brand.white};

  img {
    margin-right: 0.2rem;
    margin-top: 0.2rem;

    width: 1.2rem;
  }
`;

export const SliderTitle = styled.div`
  margin-top: -0.2rem;
  margin-left: 0.5rem;
  padding-bottom: 1rem;

  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
