import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  SelectButtonProps,
  SelectedCountriesProps,
} from './TripPlanCountry.types';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  width: 100%;
  padding: 0.2rem 1.2rem;
`;

export const Title = styled.div`
  padding: 0;
  margin-bottom: 1rem;

  font-size: 1.7rem;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: 2.2rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OverseasDomesticContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0;
  margin: 0 -1.3rem 0.5rem -1.3rem;
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
  margin-bottom: 9rem;
  gap: 0.8rem;
`;

export const CountryContainer = styled.div`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    width: 100%;
    border: 2px solid white;
    border-radius: 0.625rem;

    font-weight: ${({ theme }) => theme.fontWeights.semiBold};

    &:hover {
      border: 2px solid #b4f34c;
    }
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .country-ko,
  .country-en {
    position: absolute;
    bottom: 0.5rem;

    line-height: 1rem;
    color: ${({ theme }) => theme.brand.white};
  }

  .country-ko {
    font-size: 0.7rem;
  }

  .country-eng {
    font-size: 0.85rem;
  }
`;

export const SelectedCountries = styled.div<SelectedCountriesProps>`
  display: ${(props) => (props.country.length > 0 ? 'flex' : 'none')};
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: fixed;
  bottom: 3.3rem;

  width: 100%;
  gap: 0.7rem;
  padding: 1rem 0;

  background-color: white;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    padding: 0 0.2rem;

    img {
      width: 2.2rem;
      height: 2.2rem;
      border: 1.5px solid #b4f34c;
      border-radius: 10rem;
      margin-bottom: 0.2rem;
    }

    .selected-name {
      font-size: 0.625rem;
    }
  }
`;

export const RemoveButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: 0.2rem;
  top: 0;

  width: 0.7rem;
  height: 0.7rem;
  background-color: #626262;
  border-radius: 50%;

  font-size: 0.6rem;
  color: white;
`;
