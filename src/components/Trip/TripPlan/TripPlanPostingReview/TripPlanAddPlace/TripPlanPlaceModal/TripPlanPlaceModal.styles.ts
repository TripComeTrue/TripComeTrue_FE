import styled from 'styled-components';
import { EachPlaceProps } from './TripPlanPlaceModal.types';
import { Button } from '@/components/common';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 0;
  margin-top: -1.2rem;

  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.text.black};
`;

export const AddNewPlaceButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SelectedPlaceContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .select-arrow {
    position: absolute;
    top: 0.7rem;
    right: 0.6rem;
  }
`;

export const SelectPlace = styled.select`
  top: -1rem;

  width: 100%;
  height: 2.5rem;
  padding: 0.5rem 0.7rem;
  margin-bottom: 1rem;

  appearance: none;
  outline: none;
  border: 1px solid #b4f34c;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.brand.white};

  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.text.black};
`;

export const ShowPlacesContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0.2rem 0.5rem 3rem 0.5rem;
  gap: 1rem;
`;

export const EachPlace = styled.div<EachPlaceProps>`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  position: relative;

  gap: 0.2rem;

  .checked {
    display: ${(props) => (props.selected ? 'block' : 'none')};
    position: absolute;
    top: 0;
    left: 0;

    background-color: white;
    border-radius: 80%;

    font-size: 1.5rem;
    color: #b4f34c;
  }

  .place {
    padding: 0 2rem;
  }
  .address {
    padding: 0 2rem;

    color: ${({ theme }) => theme.text.gray};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }
`;

export const FinalSelectionButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;

  width: 19rem;
  height: 4.5rem;

  background-color: white;
`;
