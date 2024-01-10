import { TripHomeBody, TripHomeHeader } from '@/components/Trip';
import * as Styled from './TripHome.styles';

const TripHome = () => {
  return (
    <Styled.Container>
      <TripHomeHeader />
      <TripHomeBody />
    </Styled.Container>
  );
};

export default TripHome;
