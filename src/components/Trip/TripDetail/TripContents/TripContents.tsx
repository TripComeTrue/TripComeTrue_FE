import { useState } from 'react';
import Maps from '../Maps/Maps';
import TripDescription from '../TripDescription/TripDescription';
import * as Styled from './TripContents.styles';
import { TripContentsProps } from './TripContents.types';

const TripContents = ({ schedulesData }: TripContentsProps) => {
  const [selectedDay, setSelectedDay] = useState(0);

  const onClickDaySelect = (index: number): void => {
    setSelectedDay(index);
  };

  const schedulesArr = schedulesData && Object.entries(schedulesData);

  return (
    <Styled.Container>
      <Maps daysData={schedulesArr && schedulesArr[selectedDay][1]} />
      <Styled.DayButtonList>
        {schedulesArr?.map((schedule, index) => (
          <Styled.DayButton
            key={schedule[0]}
            $select={selectedDay === index}
            onClick={() => onClickDaySelect(index)}>
            {index + 1}일차
          </Styled.DayButton>
        ))}
      </Styled.DayButtonList>
      <TripDescription data={schedulesArr && schedulesArr[selectedDay]} />
    </Styled.Container>
  );
};

export default TripContents;
