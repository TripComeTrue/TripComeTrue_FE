import { TripCard } from '../..';
import * as Styled from './CardList.styles';
import { CardListProps } from './CardList.types';

const CardList = ({ tripRecordsData }: CardListProps) => {
  return (
    <Styled.Container>
      {tripRecordsData?.map((data) => (
        <TripCard key={data.tripRecordId} tripRecordData={data} />
      ))}
    </Styled.Container>
  );
};

export default CardList;
