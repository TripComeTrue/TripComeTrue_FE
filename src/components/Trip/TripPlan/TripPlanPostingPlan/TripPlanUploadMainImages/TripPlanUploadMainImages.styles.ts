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

  width: 7rem;
  height: 7rem;
  flex-shrink: 0;
  margin-bottom: 1rem;

  background-color: ${({ theme }) => theme.brand.gray};
  border-radius: 0.9375rem;

  .image-icon {
    position: absolute;
    top: 1.8rem;
    fill: #626262;
  }

  .photo-text {
    position: absolute;
    top: 3.6rem;

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

  width: 7rem;

  img {
    width: 7rem;
    height: 7rem;
    object-fit: cover;
    border-radius: 0.8rem;
  }
`;

export const RemoveBtn = styled.button`
  position: absolute;
  top: 0.2rem;
  left: 5.7rem;
  z-index: 10;

  cursor: pointer;

  img {
    width: 1rem;
    height: 1rem;
    border: none;
  }
`;
