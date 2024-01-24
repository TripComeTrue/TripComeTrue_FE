import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import * as Styled from './TripPlanCountry.styles';
import { getTripCountries } from '@/apis/trip-planandrecords';
import { CountryData } from '@/@types/trip-alldata.types';
import { Continents } from '@/constants/tripPlanAndRecord';
import { useTripFormData } from '@/pages/Trip/TripPlan/TripFormDataContext';

const TripPlanCountry = () => {
  const { updateTripPlanData } = useTripFormData();
  const [isOverseas, setIsOverseas] = useState<boolean>(true);
  const [continent, setContinent] = useState<string>('ALL');
  const [selectedCountries, setSelectedCountries] = useState<CountryData[]>([]);

  const param = isOverseas ? (continent === 'ALL' ? '' : continent) : 'KOREA';

  const { data } = useQuery({
    queryKey: ['TripCountries', param],
    queryFn: () => getTripCountries(param, isOverseas),
  });

  const selectOverseas = (isOverseasValue: boolean) => {
    setIsOverseas(isOverseasValue);
    setContinent('ALL');
  };

  const selectContinent = (continentName: string) => {
    setContinent(continentName || 'ALL');
  };

  const selectCountry = (selectedCountry: CountryData) => {
    setSelectedCountries((prevCountries) => {
      const sortedSelectedCountries = prevCountries.some(
        (c) => c.countryName === selectedCountry.countryName,
      );

      let finalUpdatedCountries = prevCountries;
      if (!sortedSelectedCountries) {
        finalUpdatedCountries = [...prevCountries, selectedCountry];
      }

      updateTripPlanData({
        countries: finalUpdatedCountries.map((c) => c.countryName),
      });

      return finalUpdatedCountries;
    });
  };

  const removeCountry = (countryToRemove: string) => {
    setSelectedCountries((prevCountries) =>
      prevCountries.filter((c) => c.countryName !== countryToRemove),
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
            $isSelected={isOverseas}
            onClick={() => selectOverseas(true)}>
            해외
          </Styled.SelectButton>
          <Styled.SelectButton
            className="domestic"
            $isSelected={!isOverseas}
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
          {Continents.filter((mainCategory) =>
            isOverseas
              ? mainCategory.mainCategory === 'OVERSEAS'
              : mainCategory.mainCategory === 'DOMESTIC',
          )
            .flatMap((mainCategory) =>
              isOverseas
                ? mainCategory.subCategories
                : mainCategory.subCategories.filter(
                    (sub) => sub.continent === 'ALL',
                  ),
            )
            .map((subCategory) => (
              <Styled.ContinentWrapper key={subCategory.continent}>
                <button
                  type="button"
                  className={`continent ${
                    continent === subCategory.continent ? 'selected' : ''
                  }`}
                  onClick={() => selectContinent(subCategory.continent)}>
                  {subCategory.continentName}
                </button>
              </Styled.ContinentWrapper>
            ))}
        </Styled.ContinentSwiper>

        <Styled.CountryWrapper $selectedCountries={selectedCountries}>
          {data?.map((item: CountryData) => (
            <Styled.CountryContainer key={item.country}>
              <button type="button" onClick={() => selectCountry(item)}>
                <img src={item.countryImageUrl} alt="country" />
                <span className="country-ko">
                  {item.countryName}
                  <br />
                  <span className="country-eng">{item.country}</span>
                </span>
              </button>
            </Styled.CountryContainer>
          ))}
          <Styled.SelectedCountries $selectedCountries={selectedCountries}>
            {selectedCountries.map((selectedCountry) => (
              <div key={selectedCountry.countryName}>
                <img
                  src={selectedCountry.countryImageUrl}
                  alt="selected-country"
                />
                <div className="selected-name">
                  {selectedCountry.countryName}
                </div>
                <Styled.RemoveButton
                  onClick={() => removeCountry(selectedCountry.countryName)}>
                  x
                </Styled.RemoveButton>
              </div>
            ))}
          </Styled.SelectedCountries>
        </Styled.CountryWrapper>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default TripPlanCountry;
