import { useEffect, useState } from 'react';
import * as Styled from './CityListModal.styles';
import { SlArrowDown } from 'react-icons/sl';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Button } from '@/components/common';
import image from '../../../TripPlan/TripPlanCountry/constants/france.png';
import { SelectedCitiesProps } from './CityListModal.types';

const CityListModal: React.FC<SelectedCitiesProps> = ({
  selectedCities,
  onCitySelection,
  onCloseModal,
}: SelectedCitiesProps) => {
  const [selectedCitiesInModal, setSelectedCitiesInModal] = useState<string[]>(
    [],
  );
  const selectedCountries = [
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
  const [selectedCountry, setSelectedCountry] = useState<string>(
    selectedCountries[0].name,
  );

  const selectCountry = (country: string) => {
    setSelectedCountry(country);
  };

  const citiesInSelectedCountry =
    selectedCountries.find((country) => country.name === selectedCountry)
      ?.cities || [];

  const selectCity = (cityName: string) => {
    setSelectedCitiesInModal((prevCities) => {
      const isAlreadySelected = prevCities.includes(cityName);
      if (isAlreadySelected) {
        return prevCities.filter((city) => city !== cityName);
      } else {
        return [...prevCities, cityName];
      }
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
          {selectedCountries.map((country) => (
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
        </Styled.SelectCountries>
        <span className="select-arrow">
          <SlArrowDown style={{ color: '#505050' }} />
        </span>
      </Styled.SelectedCountriesContainer>

      <Styled.ShowCitiesContainer>
        {citiesInSelectedCountry.map((city) => (
          <Styled.EachCity
            key={city}
            onClick={() => selectCity(city)}
            selected={selectedCities.includes(city)}>
            <img src={image} />
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

export default CityListModal;
