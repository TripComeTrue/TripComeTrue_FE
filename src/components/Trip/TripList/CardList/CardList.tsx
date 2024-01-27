import { TripCard } from '../..';
import * as Styled from './CardList.styles';
import { CardListProps } from './CardList.types';

const CardList = ({ tripRecordsData }: CardListProps) => {
  return (
    <Styled.Container>
      {tripRecordsData?.pages.map((tripRecordArr: TripRecord[]) =>
        tripRecordArr.map((tripRecordData: TripRecord) => (
          <TripCard
            key={tripRecordData.tripRecordId}
            tripRecordData={tripRecordData}
          />
        )),
      )}
    </Styled.Container>
  );
};

export default CardList;
