import { Fragment } from 'react';
import { TripCard } from '../..';
import * as Styled from './CardList.styles';
import { CardListProps } from './CardList.types';

const CardList = ({ tripRecordsData }: CardListProps) => {
  return (
    <Styled.Container>
      {tripRecordsData?.pages.map((tripRecordArr: TripRecord[], index) => (
        <Fragment key={index}>
          {tripRecordArr.map((tripRecordData: TripRecord) => (
            <TripCard
              key={tripRecordData.tripRecordId}
              tripRecordData={tripRecordData}
            />
          ))}
        </Fragment>
      ))}
    </Styled.Container>
  );
};

export default CardList;
