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
      <HotPlace />
      <TopReview />
      <Banner />
    </styled.CityWrap>
  );
};

export default City;
