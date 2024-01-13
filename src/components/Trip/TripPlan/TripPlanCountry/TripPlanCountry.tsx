import { useState } from 'react';
import * as Styled from '../TripPlanCountry/TripPlanCountry.styles';
import { SubTitle } from '@/components/common';
import { Continent } from './TripPlanCountry.types';
import { worldData } from './constants/CountryData';
import {
  TripPlanPrevButton,
  TripPlanNextButton,
} from '../TripPlanButton/TripPlanButton';

const TripPlanCountry = () => {
  const [isOverseas, setIsOverseas] = useState<boolean>(true);
  const [continent, setContinent] = useState<Continent | string>('전체');
  const [country, setCountry] = useState<string[]>([]);

  const selectOverseas = (isOverseasValue: boolean) => {
    setIsOverseas(isOverseasValue);
    setContinent('전체');
  };

  const selectContinent = (continentName: string) => {
    const selectedContinent = worldData[isOverseas ? '해외' : '국내'].find(
      (conti) => conti.name === continentName,
    );
    setContinent(selectedContinent || '전체');
  };

  const selectCountry = (countryName: string) => {
    setCountry((prevCountries) => {
      if (prevCountries.includes(countryName)) {
        return prevCountries;
      } else {
        return [...prevCountries, countryName];
      }
    });
  };

  const removeCountry = (countryToRemove: string) => {
    setCountry((prevCountries) =>
      prevCountries.filter((country) => country !== countryToRemove),
    );
  };

  const getCountries = () => {
    if (typeof continent === 'string') {
      return worldData[isOverseas ? '해외' : '국내'][0].subCategories;
    }
    return continent.subCategories;
  };

  return (
    <>
      <TripPlanPrevButton />
      <Styled.Wrapper>
        <SubTitle fontSize={20} margin="0.2rem">
          여행 기간 동안
          <br /> 어느 국가를 다녀오셨나요?
        </SubTitle>
        <Styled.Container>
          <Styled.OverseasDomesticContainer>
            <Styled.SelectButton
              className="overseas"
              isSelected={isOverseas}
              onClick={() => selectOverseas(true)}>
              해외
            </Styled.SelectButton>
            <Styled.SelectButton
              className="domestic"
              isSelected={!isOverseas}
              onClick={() => selectOverseas(false)}>
              국내
            </Styled.SelectButton>
          </Styled.OverseasDomesticContainer>
          <Styled.ContinentContainer>
            {worldData[isOverseas ? '해외' : '국내'].map((item) => (
              <button
                key={item.name}
                onClick={() => selectContinent(item.name)}>
                {item.name}
              </button>
            ))}
          </Styled.ContinentContainer>
          <Styled.CountryContainer>
            {getCountries().map((country) => (
              <button
                key={country.name}
                onClick={() => selectCountry(country.name)}>
                {country.name}
              </button>
            ))}
          </Styled.CountryContainer>
        </Styled.Container>
      </Styled.Wrapper>
      <Styled.SelectedCountries country={country}>
        {country.map((selectedCountry, index) => (
          <div key={index}>
            {selectedCountry}
            <Styled.RemoveButton onClick={() => removeCountry(selectedCountry)}>
              x
            </Styled.RemoveButton>
          </div>
        ))}
      </Styled.SelectedCountries>

      <TripPlanNextButton />
    </>
  );
};

export default TripPlanCountry;
