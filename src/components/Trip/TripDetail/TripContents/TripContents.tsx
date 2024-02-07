import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Maps from '../Maps/Maps';
import TripDescription from '../TripDescription/TripDescription';
import * as Styled from './TripContents.styles';
import { TripContentsProps } from './TripContents.types';

const TripContents = ({ schedulesData }: TripContentsProps) => {
  const { tripRecordId } = useParams() as { tripRecordId: string };
  const [selectedDay, setSelectedDay] = useState(0);
  const schedulesArr = schedulesData && Object.entries(schedulesData);

  const onClickDaySelect = (index: number): void => {
    setSelectedDay(index);
  };

  useEffect(() => {
    setSelectedDay(0);
  }, [tripRecordId]);

  return (
    <Styled.Container>
      <Maps daysData={schedulesArr[selectedDay][1]} />
      <Styled.DayButtonList>
        {schedulesArr.map((schedule, index) => (
          <Styled.DayButton
            key={schedule[0]}
            $select={selectedDay === index}
            onClick={() => onClickDaySelect(index)}>
            {index + 1}일차
          </Styled.DayButton>
        ))}
      </Styled.DayButtonList>
      <TripDescription data={schedulesArr[selectedDay]} />
    </Styled.Container>
  );
};

export default TripContents;
