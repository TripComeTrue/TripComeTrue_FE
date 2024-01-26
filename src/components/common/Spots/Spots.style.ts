import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SwiperWrap = styled(Swiper)`
  margin-top: 0.6rem;
  position: relative;
  padding: 0 1rem;
`;

export const SwiperSlideWrap = styled(SwiperSlide)``;

export const SliderImg = styled.div`
  position: relative;
  aspect-ratio: 1;
  margin-bottom: 0.4375rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: top;
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
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.brand.white};

  div {
    svg {
      font-size: ${({ theme }) => theme.fontSizes.lg};
    }
    span {
      font-size: 10px;
    }
  }
`;

export const SliderTitle = styled.div`
  margin-top: -0.2rem;
  font-size: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding-bottom: 1rem;
  text-align: center;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const SliderTitleSortLeft = styled.div`
  margin-top: -0.2rem;
  margin-left: 0.5rem;
  font-size: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding-bottom: 1rem;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const SliderTitleSpace = styled.div`
  margin-top: -0.2rem;
  font-size: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding: 0 0.7rem 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;

  img {
    width: 1rem;
  }

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const SpaceTitle = styled.div``;

export const SpaceImg = styled.div`
  display: flex;
  align-items: center;
  font-size: 10px;
  color: #626262;

  img {
    margin-right: 0.2rem;
    width: 0.8rem;
  }
`;

// 삭제 버튼 추가
export const DeleteBtn = styled.button`
  width: ${({ theme }) => theme.fontSizes.xxxl};
  height: ${({ theme }) => theme.fontSizes.xxxl};
  position: absolute;
  top: 0.25rem;
  right: 0.125rem;
  color: ${({ theme }) => theme.brand.white};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  cursor: pointer;
`;
