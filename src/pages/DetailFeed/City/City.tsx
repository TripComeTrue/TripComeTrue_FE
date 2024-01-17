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
import * as Styled from './City.styles';
import { FeedNav } from '@/components/common';

const City = () => {
  return (
    <div>
      <FeedNav>안목해변</FeedNav>
      <Styled.CityWrapper>
        <DetailFeedShorts />
        <Gallery />
        <Weather />
        <CityInformation />
        <ExchangeRate />
        <TopReview />
        <HotPlace />
        <Banner />
      </Styled.CityWrapper>
    </div>
  );
};

export default City;
