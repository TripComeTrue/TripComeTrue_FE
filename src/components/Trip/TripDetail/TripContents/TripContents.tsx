import { MouseEvent, useState } from 'react';
import Maps from '../Maps/Maps';
import TripDescription from '../TripDescription/TripDescription';
import * as Styled from './TripContents.styles';
import { TripContentsProps } from './TripContents.types';

const TripContents = ({ schedulesData }: TripContentsProps) => {
  const [selectedDay, setSelectedDay] = useState('1일차');

  const onClickDaySelect = (event: MouseEvent<HTMLButtonElement>): void => {
    const target = event.target as HTMLButtonElement;
    setSelectedDay(target.innerText);
  };

  return (
    <Styled.Container>
      <Maps />
      <Styled.DayButtonList>
        {/* <Styled.DayButton
          $select={selectedDay === '1일차'}
          onClick={onClickDaySelect}>
          1일차
        </Styled.DayButton>
        <Styled.DayButton
          $select={selectedDay === '2일차'}
          onClick={onClickDaySelect}>
          2일차
        </Styled.DayButton>
        <Styled.DayButton
          $select={selectedDay === '3일차'}
          onClick={onClickDaySelect}>
          3일차
        </Styled.DayButton>
        <Styled.DayButton
          $select={selectedDay === '4일차'}
          onClick={onClickDaySelect}>
          4일차
        </Styled.DayButton> */}
        {/* {schedulesData.map((data) => (
          <Styled.DayButton
            $select={selectedDay === '1일차'}
            onClick={onClickDaySelect}>
            1일차
          </Styled.DayButton>
        ))} */}
      </Styled.DayButtonList>
      <TripDescription />
    </Styled.Container>
  );
};

export default TripContents;
