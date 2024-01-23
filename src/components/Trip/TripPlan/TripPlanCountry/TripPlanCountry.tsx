import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import * as Styled from './TripPlanCountry.styles';
import { getTripCountries } from '@/apis/trip-planandrecords';
import { CountryData } from '@/@types/trip-alldata.types';
import { Continents } from '@/constants/tripPlanAndRecord';

const TripPlanCountry = () => {
  const [isOverseas, setIsOverseas] = useState<boolean>(true);
  const [continent, setContinent] = useState<string>('all');
  const [country, setCountry] = useState<string[]>([]);

  // default : 해외 - '전체' 대륙
  const param = isOverseas && continent === 'all' ? '' : continent;

  const { data, isLoading, isError } = useQuery({
    queryKey: ['TripCountries', param],
    queryFn: () => getTripCountries(param),
  });

  const selectOverseas = (isOverseasValue: boolean) => {
    setIsOverseas(isOverseasValue);
    setContinent('all');
  };

  const selectContinent = (continentName: string) => {
    setContinent(continentName || 'all');
  };

  const selectCountry = (countryName: string) => {
    setCountry((prevCountries) => {
      if (prevCountries.includes(countryName)) {
        return prevCountries;
      }
      return [...prevCountries, countryName];
    });
  };

  const removeCountry = (countryToRemove: string) => {
    setCountry((prevCountries) =>
      prevCountries.filter((c) => c !== countryToRemove),
    );
  };

  return (
    <Styled.Wrapper>
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
          {Continents.map((continentName) => (
            <Styled.ContinentWrapper key={continentName.continent}>
              <button
                type="button"
                className={`continent ${
                  continent === continentName.continent ? 'selected' : ''
                }`}
                onClick={() => selectContinent(continentName.continent)}>
                {continentName.continentName}
              </button>
            </Styled.ContinentWrapper>
          ))}
        </Styled.ContinentSwiper>

        <Styled.CountryWrapper country={country}>
          {data?.data.map((item: CountryData) => (
            <Styled.CountryContainer key={item.country}>
              <button type="button" onClick={() => selectCountry(item.country)}>
                <img src={item.countryImageUrl} alt="country" />
                <span className="country-ko">
                  {item.countryName}
                  <br />
                  <span className="country-eng">{item.country}</span>
                </span>
              </button>
            </Styled.CountryContainer>
          ))}
          {/* <Styled.SelectedCountries country={country}>
            {country.map((selectedCountryName) => {
              const selectedCountry = getCountryImgByName(selectedCountryName);
              return (
                <div key={selectedCountryName}>
                  <img src={selectedCountry?.img} alt="selected-country" />
                  <div className="selected-name">{selectedCountryName}</div>
                  <Styled.RemoveButton
                    onClick={() => removeCountry(selectedCountryName)}>
                    x
                  </Styled.RemoveButton>
                </div>
              );
            })}
          </Styled.SelectedCountries> */}
        </Styled.CountryWrapper>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default TripPlanCountry;
