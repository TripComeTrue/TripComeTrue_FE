import { useEffect, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import * as Styled from './TripPlanCityModal.styles';
import { Button } from '@/components/common';
import { SelectedCitiesProps } from './TripPlanCityModal.types';
import { useTripFormData } from '@/pages/Trip/TripPlan/TripFormDataContext';
import { getTripCities } from '@/apis/trip-planandrecords';
import { City, CountryData } from '@/@types/trip-alldata.types';

const TripPlanCityModal: React.FC<SelectedCitiesProps> = ({
  selectedCities,
  onCitySelection,
  onCloseModal,
}: SelectedCitiesProps) => {
  const { tripPlanData } = useTripFormData();
  const selectedCountries = tripPlanData.countries;
  const [selectedCountry, setSelectedCountry] = useState<string>(
    tripPlanData.countries[0],
  );
  const [selectedCitiesInModal, setSelectedCitiesInModal] = useState<string[]>(
    [],
  );

  const { data } = useQuery({
    queryKey: ['TripCities'],
    queryFn: () => getTripCities(),
  });

  const selectRef = useRef<HTMLSelectElement>(null);

  const handleArrowClick = () => {
    selectRef.current?.click();
  };

  const selectCountry = (country: string) => {
    setSelectedCountry(country);
  };

  const selectCity = (cityName: string) => {
    setSelectedCitiesInModal((prevCities) => {
      const isAlreadySelected = prevCities.includes(cityName);
      if (isAlreadySelected) {
        return prevCities.filter((city) => city !== cityName);
      }
      return [...prevCities, cityName];
    });
  };

  useEffect(() => {
    onCitySelection(selectedCitiesInModal);
  }, [selectedCitiesInModal]);

  return (
    <Styled.Wrapper>
      <Styled.SelectedCountriesContainer>
        <Styled.SelectCountries
          className="select-citydetail"
          onChange={(e) => selectCountry(e.target.value)}
          value={selectedCountry}>
          {selectedCountries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </Styled.SelectCountries>
        <Styled.ArrowIcon onClick={handleArrowClick} />
      </Styled.SelectedCountriesContainer>

      <Styled.ShowCitiesContainer>
        {Array.isArray(data?.data) &&
          data.data
            .filter(
              (country: CountryData) => country.countryName === selectedCountry,
            )
            .flatMap((countryName: CountryData) => countryName.cityList)
            .map((city: City) => (
              <Styled.EachCity
                key={city.cityId}
                onClick={() => selectCity(city.cityName)}
                selected={selectedCities.includes(city.cityName)}>
                <img src={city.cityImageUrl} alt="selected-city" />
                {city.cityName}
                <CheckCircleIcon className="checked" fill="#b4f34c" />
              </Styled.EachCity>
            ))}
      </Styled.ShowCitiesContainer>

      <Styled.FinalSelectionButton>
        {' '}
        {selectedCities.length > 0 ? (
          <Button
            variants="primary"
            size="lg"
            rounded="sm"
            onClick={() => {
              onCitySelection(selectedCitiesInModal);
              onCloseModal();
            }}>
            {selectedCities.length === 1
              ? `${selectedCities[0]} 지역 선택 완료`
              : `${selectedCities[0]} 외 ${
                  selectedCities.length - 1
                }개 지역 선택 완료`}
          </Button>
        ) : (
          <Button variants="gray" size="lg" rounded="sm" disabled>
            선택 완료
          </Button>
        )}
      </Styled.FinalSelectionButton>
    </Styled.Wrapper>
  );
};

export default TripPlanCityModal;
