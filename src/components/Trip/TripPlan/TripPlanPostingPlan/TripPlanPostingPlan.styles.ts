import styled from 'styled-components';
import ReactSlidingPane from 'react-sliding-pane';
import { PostingProps } from './TripPlanPostingPlan.types';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
`;

export const Container = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */

  padding: 0 1rem;
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

  width: 100%;
  padding: 0;
  gap: 0.5rem;
  overflow: scroll;
`;

export const DaysButton = styled.button<PostingProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  width: 3.5rem;
  height: 1.5rem;
  line-height: 1.5rem;
  background-color: ${(props) =>
    props.$isDaySelected ? '#b4f34c' : '#DCDCDC'};
  border-radius: 15rem;
  margin: 0.9rem 0;

  color: ${(props) => (props.$isDaySelected ? '#373737' : '#626262')};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  cursor: pointer;
  text-align: center;
`;

export const PostingForm = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;

  gap: 0.8rem;
  width: 100%;

  input {
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

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
`;

export const CityInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  width: 100%;

  margin-bottom: 0.8rem;

  .city-icon {
    position: absolute;
    top: 50%;
    left: 0.6rem;
    transform: translateY(-50%);
  }
`;

export const CityInput = styled.input`
  width: 100%;
  height: 2.5rem;
  background-color: ${({ theme }) => theme.brand.white};
  border: 1px solid #b4f34c;
  padding-left: 2rem;
  border-radius: 0.4rem;

  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.text.black};
  font-size: ${({ theme }) => theme.fontSizes.md};

  &:focus {
    border: 1px solid #b4f34c;
  }
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

  width: 2.3rem;
  height: 2.3rem;
  flex-shrink: 0;
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
  width: 100%;
  border-radius: 0.4rem;
  padding-left: 1rem;
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
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const AddPlaceButton = styled.div`
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
