import styled from 'styled-components';
import ReactSlidingPane from 'react-sliding-pane';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PostingProps } from './TripPlanPostingPlan.types';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;

  padding: 0.2rem 1.2rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DateDisplay = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;

  width: 100%;
  height: 2.3rem;
  border: 1px solid #b4f34c;
  border-radius: 0.4rem;
  margin-bottom: 1rem;

  outline: none;
  appearance: none;

  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.text.black};
  font-size: ${({ theme }) => theme.fontSizes.sm};

  .date {
    margin-left: 2.1rem;
  }

  .nightndays {
    margin-right: 1rem;
  }

  .calendar-icon {
    position: absolute;
    top: 0.5rem;
    left: 0.7rem;

    font-size: 1.1rem;
  }
`;

export const GoogleMapsContainer = styled.div`
  width: 100%;
  height: 10rem;
`;

export const DaysContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  gap: 0.4rem;
`;

export const DaysButton = styled.button<PostingProps>`
  width: 3.5rem;
  height: 1.5rem;

  background-color: ${(props) =>
    props.$isDaySelected ? '#b4f34c' : '#DCDCDC'};
  border-radius: 15rem;
  margin: 0.9rem 0;

  color: ${(props) => (props.$isDaySelected ? '#373737' : '#626262')};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 360px;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const PostingForm = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;

  gap: 0.8rem;

  .city-icon {
    position: absolute;
    top: 0.6rem;
    left: 0.8rem;
  }

  input {
    width: 100%;
    height: 2.5rem;
    background-color: ${({ theme }) => theme.brand.white};
    border: 1px solid #b4f34c;

    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.text.black};
    font-size: ${({ theme }) => theme.fontSizes.md};

    &:focus {
      border: 1px solid #b4f34c;
    }
  }
`;

export const CityInput = styled.input`
  border-radius: 0.4rem;
  padding-left: 2rem;
`;

export const PlaceInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SlidingPane = styled(ReactSlidingPane)`
  .slide-pane__header {
    background-color: white;
    border: 0;

    svg {
      width: 0.9375rem;
      height: 0.9375rem;
    }
  }

  .slide-pane__close {
    margin: 0;
  }
`;

export const PlaceNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1.75rem;
  height: 1.75rem;
  margin-right: 0.6rem;

  background-color: ${({ theme }) => theme.brand.black};
  border-radius: 50%;

  font-family: 'Mundial', sans-serif;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.brand.white};
  font-size: ${({ theme }) => theme.fontSizes.md};
  text-align: center;
`;

export const PlaceInput = styled.input`
  border-radius: 0.4rem;
  padding-left: 0.8rem;
`;

export const NoteInput = styled.textarea`
  width: 100%;
  height: 9rem;

  border: 1px solid #b4f34c;
  border-radius: 0.4rem;
  padding: 0.75rem;

  background-color: ${({ theme }) => theme.brand.white};
  outline-color: #b4f34c;
  resize: none;

  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.text.black};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

export const UploadImageContainer = styled.div`
  display: flex;
  flex-direction: row;

  padding: 0 1rem;
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

  cursor: pointer;

  .image-icon {
    position: absolute;
    top: 2rem;
    fill: #626262;
  }

  .photo-text {
    position: absolute;
    top: 3.8rem;

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

  width: 1rem;
  height: 1rem;
  border: none;

  cursor: pointer;
`;

export const PlaceAddButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 1.5rem 0 5rem 0;
  gap: 0.5rem;

  font-size: 0.9375rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.text.gray};
`;

export const SubmitButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  gap: 1rem;
  margin-bottom: 1.5rem;

  button {
    width: 100%;
    height: 2.8rem;
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;
