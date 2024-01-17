import {
  Banner,
  CityInformation,
  DetailFeedShorts,
  ExchangeRate,
  Gallery,
  HotPlace,
  TopReview,
  Weather,
} from '@/components/DetailFeed';
import * as styled from './City.styles';

const City = () => {
  return (
    <styled.CityWrap>
      <DetailFeedShorts />
      <Gallery />
      <Weather />
      <CityInformation />
      <ExchangeRate />
      <TopReview />
      <HotPlace />
      <Banner />
    </styled.CityWrap>
  );
};

export default City;
