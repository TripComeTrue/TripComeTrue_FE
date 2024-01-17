import {
  Banner,
  DetailFeedShorts,
  ExchangeRate,
  Gallery,
  HotPlace,
  Information,
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
      <Information />
      <ExchangeRate />
      <TopReview />
      <HotPlace />
      <Banner />
    </styled.CityWrap>
  );
};

export default City;
