import { Weather } from '@/components/DetailFeed';
import * as styled from './City.styles';

const City = () => {
  return (
    <styled.CityWrap>
      <Weather />
    </styled.CityWrap>
  );
};

export default City;
