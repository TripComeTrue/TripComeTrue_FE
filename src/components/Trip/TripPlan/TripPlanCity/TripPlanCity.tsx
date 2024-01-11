import { add, differenceInCalendarDays } from 'date-fns';
import * as Styled from './TripPlanCity.styles';
import { SubTitle } from '@/components/common';
import { TripPlanFooter } from '..';
const TripPlanCity = () => {
  const startDate = new Date(2024, 0, 11);
  const endDate = new Date(2024, 0, 15);

  const totalTripDays = differenceInCalendarDays(endDate, startDate);

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
          />
        </Styled.EachDayContainer>,
      );
    }

    return totalInputs;
  };

  return (
    <>
      <Styled.Wrapper>
        <SubTitle margin="0.8rem">
          여행 기간 동안
          <br /> 방문할 지역을 선택해 주세요.
        </SubTitle>
        <Styled.Container>{showInputPerDay()}</Styled.Container>
      </Styled.Wrapper>
      <TripPlanFooter />
    </>
  );
};

export default TripPlanCity;
