import styled from 'styled-components';
import { PostingProps } from './TripPlanPosting.types';

export const PrevButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 1rem 0;
  bottom: 0;

  background-color: white;

  button {
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
  justify-content: center;
  align-items: center;
  position: relative;

  width: 20rem;
  height: 2.3rem;
  border: 1px solid #b4f34c;
  border-radius: 0.4rem;
  margin-bottom: 1rem;

  outline: none;
  appearance: none;

  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.text.black};
  font-size: 0.8rem;

  .date {
    margin-left: 1.5rem;
  }

  .nightndays {
    margin-left: 6rem;
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
  justify-content: space-between;
  align-items: center;

  width: 100%;
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

export const TotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PostingForm = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;

  gap: 0.8rem;

  .city-icon {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
  }
`;

export const CityInput = styled.input`
  width: 20rem;
  height: 2.3rem;

  border: 1px solid #b4f34c;
  border-radius: 0.4rem;
  padding-left: 2rem;

  appearance: none;
  outline-color: #b4f34c;
  background-color: ${({ theme }) => theme.brand.white};

  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.text.black};
  font-size: 0.8rem;
`;

export const PlaceInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PlaceNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1.75rem;
  height: 1.75rem;

  background-color: ${({ theme }) => theme.brand.black};
  border-radius: 50%;

  font-family: 'Mundial', sans-serif;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.brand.white};
  font-size: ${({ theme }) => theme.fontSizes.md};
  text-align: center;
`;

export const PlaceInput = styled.input`
  width: 17.5rem;
  height: 2.3rem;

  border: 1px solid #b4f34c;
  border-radius: 0.4rem;
  padding-left: 0.8rem;

  outline-color: #b4f34c;
  appearance: none;
  background-color: ${({ theme }) => theme.brand.white};

  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.text.black};
  font-size: 0.8rem;
`;

export const NoteInput = styled.textarea`
  width: 20rem;
  height: 9rem;

  border: 1px solid #b4f34c;
  border-radius: 0.4rem;
  padding: 0.75rem;

  background-color: ${({ theme }) => theme.brand.white};
  outline-color: #b4f34c;
  appearance: none;
  resize: none;

  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.text.black};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

export const UploadPhotoIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 5.5rem;
  height: 5.5rem;
  margin-bottom: 1rem;

  background-color: ${({ theme }) => theme.brand.gray};
  border-radius: 0.9375rem;

  .photo-icon {
    position: absolute;
    top: 1.4rem;
    fill: #626262;
  }

  .photo-text {
    position: absolute;
    top: 3.1rem;

    font-size: 0.7rem;
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    color: #626262;
  }
`;

export const PhotoInput = styled.input`
  display: none;
`;

export const TagsInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  gap: 1rem;
  border-bottom: 1px solid #dcdcdc;

  font-size: 0.8rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.brand.black};

  .tag-icon {
    margin-right: 0.3rem;
  }
`;

export const TagsInputTitle = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TagsInput = styled.div``;

export const TagsAddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.text.gray};

  img {
    margin-left: 0.3rem;
  }
`;

export const PlaceAddButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 1.5rem 0;
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

  button {
    width: 9.5rem;
    height: 2.5rem;
  }
`;
