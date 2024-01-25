import {
  Banner,
  CityInformation,
  DetailFeedShorts,
  ExchangeRate,
  Gallery,
  HotPlace,
  CityTopReview,
  Weather,
} from '@/components/DetailFeed';
import { FeedNav } from '@/components/common';
import * as Styled from './City.styles';

const City = ({ cityId = 5 }: { cityId?: number }) => {
  return (
    <>
      <FeedNav>도시이름</FeedNav>
      <Styled.CityWrapper>
        {/* <DetailFeedShorts cityId={cityId} /> */}
        <Gallery id={cityId} />
        <CityInformation cityId={cityId} />
        <Weather cityId={cityId} />
        {/* <ExchangeRate cityId={cityId} /> */}
        <CityTopReview cityId={cityId} />
        <HotPlace cityId={cityId} />
        <Banner />
      </Styled.CityWrapper>
    </>
  );
};

export default City;
