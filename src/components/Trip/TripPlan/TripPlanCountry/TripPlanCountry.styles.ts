import styled from 'styled-components';
import {
  SelectButtonProps,
  SelectedCountriesProps,
} from './TripPlanCountry.types';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 0.2rem 1.2rem;
`;

export const Title = styled.div`
  padding: 0;
  margin-bottom: 1rem;

  font-size: 1.9rem;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: 2.5rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const OverseasDomesticContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid #d9d9d9;
`;

export const SelectButton = styled.button<SelectButtonProps>`
  position: relative;
  padding: 0.35rem;
  flex-grow: 1;
  font-weight: 700;
  color: ${(props) => (props.isSelected ? '#373737' : '#626262')};

  &::after {
    display: ${(props) => (props.isSelected ? 'block' : 'none')};
    content: '';
    position: absolute;
    top: 2.13rem;
    left: 0;
    width: 100%;
    height: 0.125rem;
    background-color: #b4f34c;
    opacity: 1;
  }
`;

export const ContinentSwiper = styled(Swiper)`
  display: flex;
  width: 100%;

  .continent {
    display: flex;
    justify-content: center;

    width: 3.8rem;
    padding: 0.125rem 0.9375rem;

    margin: 0;

    cursor: pointer;

    border: 1px solid #d6d6d6;
    border-radius: 10rem;

    white-space: nowrap;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.text.gray};
  }

  .continent.selected {
    border: 1px solid #b4f34c;
    background-color: ${({ theme }) => theme.brand.primary};
    color: ${({ theme }) => theme.text.black};
  }
`;

export const ContinentWrapper = styled(SwiperSlide)``;

export const CountryWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;

  margin-top: 1rem;
  gap: 0.8rem;
`;

export const CountryContainer = styled.div`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    border: 2px solid white;
    border-radius: 0.625rem;
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};

    &:hover {
      border: 2px solid #b4f34c;
    }
  }

  img {
    width: 9.5rem;
    height: 6.5rem;
  }

  .country-ko,
  .country-en {
    position: absolute;
    bottom: 0.5rem;

    line-height: 1.1rem;
    color: ${({ theme }) => theme.brand.white};
  }

  .country-ko {
    font-size: 0.7rem;
  }

  .country-eng {
    font-size: 0.9rem;
  }
`;

export const SelectedCountries = styled.div<SelectedCountriesProps>`
  display: ${(props) => (props.country.length > 0 ? 'flex' : 'none')};
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: fixed;
  bottom: 0;

  gap: 1rem;
  padding: 1rem;

  width: 100%;
  height: calc(100vh - 78%);
  background-color: white;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    height: 3rem;
    object-fit: cover;
    white-space: nowrap;
    padding: 1rem;
    border-radius: 15rem;
    background-color: #d9d9d9;
  }
`;

export const RemoveButton = styled.button`
  position: absolute;
  right: 0.3rem;
  top: 0;
`;
