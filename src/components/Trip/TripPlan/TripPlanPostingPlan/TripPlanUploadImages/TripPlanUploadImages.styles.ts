import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  gap: 0.7rem;
`;

export const UploadImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 0;

  width: 100%;
`;

export const UploadImageIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 6rem;
  height: 6rem;
  flex-shrink: 0;

  background-color: ${({ theme }) => theme.brand.gray};
  border-radius: 0.9375rem;

  .image-icon {
    position: absolute;
    top: 1.4rem;
    fill: #626262;
  }

  .photo-text {
    position: absolute;
    top: 3rem;

    text-align: center;
    font-size: 0.7rem;
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    color: #626262;
  }
`;

export const ImageInput = styled.input`
  display: none;
`;

export const UploadedImageSwiper = styled(Swiper)`
  padding: 0 0.9rem;
`;

export const UploadedImage = styled(SwiperSlide)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: relative;

  width: 6rem;

  img {
    width: 6rem;
    height: 6rem;
    object-fit: cover;
    border-radius: 0.8rem;
  }
`;

export const RemoveBtn = styled.button`
  position: absolute;
  top: 0.2rem;
  left: 4.8rem;
  z-index: 10;

  cursor: pointer;

  img {
    width: 1rem;
    height: 1rem;
    border: none;
  }
`;
