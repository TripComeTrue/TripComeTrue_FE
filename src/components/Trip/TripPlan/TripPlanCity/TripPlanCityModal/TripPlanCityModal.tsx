import { useEffect, useRef, useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import * as Styled from './TripPlanCityModal.styles';
import { Button } from '@/components/common';
import image from '../../TripPlanCountry/constants/france.png';
import { SelectedCitiesProps } from './TripPlanCityModal.types';

const TripPlanCityModal: React.FC<SelectedCitiesProps> = ({
  selectedCities,
  onCitySelection,
  onCloseModal,
}: SelectedCitiesProps) => {
  const [selectedCitiesInModal, setSelectedCitiesInModal] = useState<string[]>(
    [],
  );
  const countryAndCities = [
    {
      name: '프랑스',
      cities: ['파리', '리옹', '마르세유', '니스'],
    },
    {
      name: '영국',
      cities: ['런던', '맨체스터', '에딘버러', '글래스고'],
    },
    {
      name: '미국',
      cities: ['뉴욕', '로스앤젤레스', '시카고', '샌프란시스코'],
    },
    {
      name: '중국',
      cities: ['베이징', '상하이', '광저우', '선전'],
    },
  ];

  const selectRef = useRef<HTMLSelectElement>(null);

  const handleArrowClick = () => {
    selectRef.current?.click();
  };

  const [selectedCountry, setSelectedCountry] = useState<string>(
    countryAndCities[0].name,
  );

  const selectCountry = (country: string) => {
    setSelectedCountry(country);
  };

  const citiesInSelectedCountry =
    countryAndCities.find((country) => country.name === selectedCountry)
      ?.cities || [];

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
  }, [selectedCitiesInModal, onCitySelection]);

  return (
    <Styled.Wrapper>
      <Styled.SelectedCountriesContainer>
        <Styled.SelectCountries
          className="select-citydetail"
          onChange={(e) => selectCountry(e.target.value)}
          value={selectedCountry}>
          {countryAndCities.map((country) => (
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
        </Styled.SelectCountries>
        <Styled.ArrowIcon onClick={handleArrowClick} />
      </Styled.SelectedCountriesContainer>

      <Styled.ShowCitiesContainer>
        {citiesInSelectedCountry.map((city) => (
          <Styled.EachCity
            key={city}
            onClick={() => selectCity(city)}
            selected={selectedCities.includes(city)}>
            <img src={image} alt="city" />
            {city}
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