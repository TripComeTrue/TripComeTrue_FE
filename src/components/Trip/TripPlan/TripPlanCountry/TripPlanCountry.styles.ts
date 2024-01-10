import styled from 'styled-components';
import { SelectButtonProps } from './TripPlanCountry.types';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  height: 100vh;
  padding: 1.2rem;
`;

export const Container = styled.div`
  flex: 1;
`;

export const OverseasDomesticContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0.5rem 0;
  margin-bottom: 0.5rem;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
`;

export const SelectButton = styled.button<SelectButtonProps>`
  position: relative;
  flex-grow: 1;

  &::after {
    display: ${(props) => (props.isSelected ? 'block' : 'none')};
    content: '';
    position: absolute;
    top: 1.95rem;
    left: 0;
    width: 100%;
    height: 1.8px;
    background-color: #b4f34c;
    opacity: 1;
  }
`;

export const ContinentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  gap: 1rem;
  overflow-x: scroll;
`;

export const CountryContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;

  margin-top: 1rem;
  gap: 0.8rem;

  button {
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 2rem;

    border: 1px solid #d9d9d9;
  }
`;

export const SelectedCountries = styled.div``;
