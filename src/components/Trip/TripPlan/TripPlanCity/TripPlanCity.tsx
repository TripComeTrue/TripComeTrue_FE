import React, { useEffect, useState } from 'react';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import { add, differenceInDays } from 'date-fns';
import PlaceIcon from '@mui/icons-material/Place';
import Checkbox from '@mui/material/Checkbox';
import { SlArrowLeft } from 'react-icons/sl';
import * as Styled from './TripPlanCityList.styles';
import { SubTitle } from '@/components/common';
import CityListModal from './TripPlanCityModal/TripPlanCityModal';
import { useTripFormData } from '@/pages/Trip/TripPlan/TripFormDataContext';

const TripPlanCity = () => {
  const { tripPlanData, updateTripPlanData } = useTripFormData();
  const [cityNames, setCityNames] = useState<string[]>([]);
  const [activeDayInput, setActiveDayInput] = useState<number | null>(null);
  const [eachDayCityInput, setEachDayCityInput] = useState<string[]>([]);
  const [isAllCitySame, setIsAllCitySame] = useState(false);
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [isCityModalOpen, setIsCityModalOpen] = useState({
    isPaneOpenLeft: false,
  });

  const startDate = new Date(tripPlanData.tripStartDay);
  const endDate = new Date(tripPlanData.tripEndDay);
  const totalTripDays = differenceInDays(endDate, startDate);

  const closeCityListModal = () => {
    setIsCityModalOpen({ isPaneOpenLeft: false });
  };

  const handleCityModalSelection = (cities: string[]) => {
    setSelectedCities(cities);
    setCityNames(cities);

    if (activeDayInput !== null) {
      const updatedInputs = [...eachDayCityInput];
      updatedInputs[activeDayInput] = cities.join(', ');
      setEachDayCityInput(updatedInputs);
    }
  };

  const handleCheckAllSameCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setIsAllCitySame(isChecked);

    if (isChecked) {
      const firstDayCity = eachDayCityInput[0];
      setEachDayCityInput(Array(totalTripDays + 1).fill(firstDayCity));
    }
  };

  const handleSetActiveDayInput = (dayIndex: number) => {
    setActiveDayInput(dayIndex);

    setIsCityModalOpen({ isPaneOpenLeft: true });
  };

  const handleChangeCityName = (cityName: string, dayIndex: number) => {
    const newCityNames = [...cityNames];
    newCityNames[dayIndex] = cityName;
    setCityNames(newCityNames);
  };

  useEffect(() => {
    updateTripPlanData({ tripPlanCities: eachDayCityInput });
  }, [eachDayCityInput]);

  const showInputPerDay = () => {
    const totalInputs = [];
    for (let i = 0; i <= totalTripDays; i += 1) {
      const eachTripDate = add(new Date(startDate), { days: i });
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
              value={eachDayCityInput[i] || ''}
              onChange={(e) => handleChangeCityName(e.target.value, i)}
              disabled={isAllCitySame}
              onClick={() => handleSetActiveDayInput(i)}
            />
          </Styled.EachDayInputWrapper>
        </Styled.EachDayContainer>,
      );
    }
    return totalInputs;
  };

  return (
    <Styled.Wrapper>
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
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default TripPlanCity;
