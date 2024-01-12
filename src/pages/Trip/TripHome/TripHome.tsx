import { TripHomeBody, TripHomeHeader } from '@/components/Trip';
import * as Styled from './TripHome.styles';
import { TabBar } from '@/components/common';
import FloatingButton from '@/components/Trip/TripHome/FloatingButton/FloatingButton';

const TripHome = () => {
  return (
    <Styled.Container>
      <TripHomeHeader />
      <TripHomeBody />
      <FloatingButton />
      <TabBar />
    </Styled.Container>
  );
};

export default TripHome;
