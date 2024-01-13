import { useEffect, useState } from 'react';
import * as Styled from '../TripPlanCountry/TripPlanCountry.styles';
import { Continent } from './TripPlanCountry.types';
import { worldData } from './constants/CountryData';
import {
  TripPlanPrevButton,
  TripPlanNextButton,
} from '../TripPlanCommon/TripPlanCommon';

const TripPlanCountry = () => {
  const [isOverseas, setIsOverseas] = useState<boolean>(true);
  const [continent, setContinent] = useState<Continent | string>('전체');
  const [country, setCountry] = useState<string[]>([]);

  const selectOverseas = (isOverseasValue: boolean) => {
    setIsOverseas(isOverseasValue);
    setContinent('전체');
  };

  const selectContinent = (continentName: string) => {
    setContinent(continentName || '전체');
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
    if (continent === '전체') {
      return worldData[isOverseas ? '해외' : '국내'][0].subCategories;
    }
    const selectedContinent = worldData[isOverseas ? '해외' : '국내'].find(
      (conti) => conti.name === continent,
    );
    return selectedContinent ? selectedContinent.subCategories : [];
  };

  useEffect(() => {
    console.log('Current continent:', continent);
  }, [continent]);

  return (
    <>
      <Styled.Wrapper>
        <TripPlanPrevButton />
        <Styled.Container>
          <Styled.Title>
            여행 기간 동안
            <br /> 어느 국가를 다녀왔나요?
          </Styled.Title>

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

          <Styled.ContinentSwiper
            spaceBetween={5}
            slidesPerView={4.7}
            direction="horizontal"
            scrollbar={{
              draggable: true,
              el: '.swiper-scrollbar',
              hide: false,
            }}>
            {worldData[isOverseas ? '해외' : '국내'].map((item) => (
              <Styled.ContinentWrapper key={item.name}>
                <button
                  className={`continent ${
                    continent === item.name ? 'selected' : ''
                  }`}
                  onClick={() => selectContinent(item.name)}>
                  {item.name}
                </button>
              </Styled.ContinentWrapper>
            ))}
          </Styled.ContinentSwiper>

          <Styled.CountryWrapper>
            {getCountries().map((country) => (
              <Styled.CountryContainer key={country.name}>
                <button onClick={() => selectCountry(country.name)}>
                  <img src={country.img} />
                  <span className="country-ko">
                    {country.name}
                    <br />
                    <span className="country-eng"> {country.eng}</span>
                  </span>
                </button>
              </Styled.CountryContainer>
            ))}
          </Styled.CountryWrapper>
        </Styled.Container>

        <Styled.SelectedCountries country={country}>
          {country.map((selectedCountry, index) => (
            <div key={index}>
              {selectedCountry}
              <Styled.RemoveButton
                onClick={() => removeCountry(selectedCountry)}>
                x
              </Styled.RemoveButton>
            </div>
          ))}
        </Styled.SelectedCountries>
        <TripPlanNextButton />
      </Styled.Wrapper>
    </>
  );
};

export default TripPlanCountry;
