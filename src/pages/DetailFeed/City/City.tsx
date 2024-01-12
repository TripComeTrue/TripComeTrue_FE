import {
  DetailFeedShorts,
  ExchangeRate,
  Information,
  Weather,
} from '@/components/DetailFeed';
import * as styled from './City.styles';

const City = () => {
  return (
    <styled.CityWrap>
      <DetailFeedShorts />
      <Weather />
      <Information />
      <ExchangeRate />
    </styled.CityWrap>
  );
};

export default City;
