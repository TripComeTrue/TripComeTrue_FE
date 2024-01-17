import React, { useEffect, useState } from 'react';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import { add, differenceInCalendarDays } from 'date-fns';
import PlaceIcon from '@mui/icons-material/Place';
import Checkbox from '@mui/material/Checkbox';
import { SlArrowLeft } from 'react-icons/sl';
import * as Styled from './TripPlanCity.styles';
import { SubTitle } from '@/components/common';
import {
  TripPlanPrevButton,
  TripPlanNextButton,
} from '../TripPlanCommon/TripPlanCommon';
import CityListModal from './CityListModal/CityListModal';

const TripPlanCity = () => {
  const [cityNames, setCityNames] = useState<string[]>([]);
  const [isAllCitySame, setIsAllCitySame] = useState(false);
  const [isCityModalOpen, setIsCityModalOpen] = useState({
    isPaneOpenLeft: false,
  });
  const [selectedCities, setSelectedCities] = useState<string[]>([]);

  const startDate = new Date(2024, 0, 11);
  const endDate = new Date(2024, 0, 14);
  const totalTripDays = differenceInCalendarDays(endDate, startDate);

  const closeCityListModal = () => {
    setIsCityModalOpen({ isPaneOpenLeft: false });
  };

  const handleCityModalSelection = (cities: string[]) => {
    setSelectedCities(cities);
  };

  const handleCheckAllSameCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsAllCitySame(e.target.checked);
    if (e.target.checked) {
      const firstDayCity = cityNames[0] || '';
      setCityNames(Array(totalTripDays + 1).fill(firstDayCity));
    }
  };

  const handleChangeCityName = (city: string, index: number) => {
    const newCityNames = [...city];
    newCityNames[index] = city;
    setCityNames(newCityNames);
  };

  useEffect(() => {
    if (selectedCities.length > 0) {
      const updatedCityNames = selectedCities.map((city, index) =>
        index <= totalTripDays ? city : '',
      );
      setCityNames(updatedCityNames);
    }
  }, [selectedCities, totalTripDays]);

  const showInputPerDay = () => {
    const totalInputs = [];

    for (let i = 0; i <= totalTripDays; i += 1) {
      const eachTripDate = add(startDate, { days: i });
      totalInputs.push(
        <Styled.EachDayContainer key={i}>
          <SubTitle fontSize={15}>
            {i + 1}일차
            <Styled.EachDayText>
              ({eachTripDate.toLocaleDateString('ko')})
            </Styled.EachDayText>
          </SubTitle>
          <Styled.EachDayInputWrapper>
            <PlaceIcon className="city-icon" style={{ fill: '#b4f34c' }} />
            <Styled.EachDayInput
              type="text"
              placeholder="방문 지역을 선택해주세요"
              value={cityNames[i] || ''}
              onChange={(e) => handleChangeCityName(e.target.value, i)}
              disabled={isAllCitySame}
              onClick={() => setIsCityModalOpen({ isPaneOpenLeft: true })}
            />
          </Styled.EachDayInputWrapper>
          <Styled.SlidingPane
            className="citymodal"
            closeIcon={<SlArrowLeft fontSize="15" />}
            isOpen={isCityModalOpen.isPaneOpenLeft}
            onRequestClose={() => {
              setIsCityModalOpen({ isPaneOpenLeft: false });
            }}
            width="22.5rem">
            <CityListModal
              selectedCities={selectedCities}
              onCitySelection={handleCityModalSelection}
              onCloseModal={closeCityListModal}
            />
          </Styled.SlidingPane>
        </Styled.EachDayContainer>,
      );
    }
    return totalInputs;
  };

  return (
    <Styled.Wrapper>
      <TripPlanPrevButton />
      <Styled.Container>
        <Styled.Title>
          여행 기간 동안
          <br /> 어느 지역을 방문했나요?
        </Styled.Title>

        <label htmlFor="eachday">
          <Checkbox
            checked={isAllCitySame}
            onChange={handleCheckAllSameCity}
            size="small"
            style={{ width: '1rem', height: '1rem', color: '#b4f34c' }}
          />{' '}
          <span className="checkbox-text">방문 지역 모두 동일</span>
          {showInputPerDay()}
        </label>
      </Styled.Container>
      <TripPlanNextButton />
    </Styled.Wrapper>
  );
};

export default TripPlanCity;
