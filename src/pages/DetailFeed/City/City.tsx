import { ExchangeRate, Information, Weather } from '@/components/DetailFeed';
import * as styled from './City.styles';

const City = () => {
  return (
    <styled.CityWrap>
      <Weather />
      <Information />
      <ExchangeRate />
    </styled.CityWrap>
  );
};

export default City;
