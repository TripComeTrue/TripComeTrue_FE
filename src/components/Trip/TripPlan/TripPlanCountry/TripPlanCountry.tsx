import { useState } from 'react';
import * as Styled from '../TripPlanCountry/TripPlanCountry.styles';
import { SubTitle } from '@/components/common';
import { Continent, Country } from './TripPlanCountry.types';
import { worldData } from './constants/CountryData';
import { TripPlanFooter } from '..';

const TripPlanCountry = () => {
  const [isOverseas, setIsOverseas] = useState<boolean>(true);
  const [continent, setContinent] = useState<Continent | null>(null);
  const [country, setCountry] = useState<Country | string[]>();

  const selectContinent = (continentName: string) => {
    setContinent(
      worldData[isOverseas ? '해외' : '국내'].find(
        (continent) => continent.name === continentName,
      ) || null,
    );
  };

  const selectCountry = (country: string) => {
    const countries = [...country];
    setCountry(countries);
  };

  return (
    <>
      <Styled.Wrapper>
        <SubTitle margin="0.8rem">
          여행 기간 동안
          <br /> 어느 국가를 다녀오셨나요?
        </SubTitle>
        <Styled.Container>
          <Styled.OverseasDomesticContainer>
            <Styled.SelectButton
              className="overseas"
              isSelected={isOverseas}
              onClick={() => setIsOverseas(true)}>
              해외
            </Styled.SelectButton>
            <Styled.SelectButton
              className="domestic"
              isSelected={!isOverseas}
              onClick={() => setIsOverseas(false)}>
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
            {continent?.subCategories.map((country) => (
              <button key={country.name} onClick={() => selectCountry}>
                {country.name}
              </button>
            ))}
          </Styled.CountryContainer>
        </Styled.Container>
        <Styled.SelectedCountries></Styled.SelectedCountries>
      </Styled.Wrapper>
      <TripPlanFooter />
    </>
  );
};

export default TripPlanCountry;
