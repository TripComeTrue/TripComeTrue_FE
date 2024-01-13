import { add, differenceInCalendarDays } from 'date-fns';
import * as Styled from './TripPlanCity.styles';
import { SubTitle } from '@/components/common';
import {
  TripPlanPrevButton,
  TripPlanNextButton,
} from '../TripPlanButton/TripPlanButton';
import React, { useState } from 'react';
const TripPlanCity = () => {
  const [cityNames, setCityNames] = useState<string[]>([]);
  const [isAllCitySame, setIsAllCitySame] = useState(false);

  const startDate = new Date(2024, 0, 11);
  const endDate = new Date(2024, 0, 15);

  const totalTripDays = differenceInCalendarDays(endDate, startDate);

  const handleCheckAllSameCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsAllCitySame(e.target.checked);
    if (e.target.checked) {
      const firstDayCity = cityNames[0] || '';
      setCityNames(Array(totalTripDays + 1).fill(firstDayCity));
    }
  };

  const handleChangeCityName = (city: string, index: number) => {
    const newCityNames = [...cityNames];
    newCityNames[index] = city;
    setCityNames(newCityNames);
  };

  const showInputPerDay = () => {
    const totalInputs = [];

    for (let i = 0; i <= totalTripDays; i++) {
      let eachTripDate = add(startDate, { days: i });
      totalInputs.push(
        <Styled.EachDayContainer key={i}>
          <SubTitle fontSize={18}>
            {i + 1}일차{' '}
            <Styled.EachDayText>
              ({eachTripDate.toLocaleDateString('ko')})
            </Styled.EachDayText>
          </SubTitle>
          <Styled.EachDayInput
            type="text"
            placeholder="방문 지역을 선택해주세요"
            value={cityNames[i] || ''}
            onChange={(e) => handleChangeCityName(e.target.value, i)}
            disabled={isAllCitySame}
          />
        </Styled.EachDayContainer>,
      );
    }

    return totalInputs;
  };

  return (
    <>
      <TripPlanPrevButton />
      <Styled.Wrapper>
        <SubTitle fontSize={20} margin="0.2rem">
          여행 기간 동안
          <br /> 방문할 지역을 선택해 주세요.
        </SubTitle>
        <Styled.Container>
          <label htmlFor="eachday">
            <input
              type="checkbox"
              checked={isAllCitySame}
              onChange={handleCheckAllSameCity}
            />{' '}
            <span>방문 지역 모두 동일</span>
            {showInputPerDay()}
          </label>
        </Styled.Container>
      </Styled.Wrapper>
      <TripPlanNextButton />
    </>
  );
};

export default TripPlanCity;
