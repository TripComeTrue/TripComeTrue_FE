import { TripCard } from '../..';
import * as Styled from './CardList.styles';

const CardList = () => {
  return (
    <Styled.Container>
      <TripCard />
      <TripCard />
      <TripCard />
    </Styled.Container>
  );
};

export default CardList;
