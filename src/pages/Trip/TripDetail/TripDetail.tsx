import { SimpleNav } from '@/components/common';
import * as Styled from './TripDetail.styles';
import MainCarousel from '@/components/Trip/TripDetail/MainCarousel/MainCarousel';
import Introduction from '@/components/Trip/TripDetail/Introduction/Introduction';

const TripDetail = () => {
  return (
    <Styled.Container>
      <SimpleNav>여행후기</SimpleNav>
      <MainCarousel />
      <Introduction />
    </Styled.Container>
  );
};

export default TripDetail;
