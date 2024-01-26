import { useLocation } from 'react-router-dom';
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
import ShortCard from '@/components/Trip/TripHome/ShortCard/ShortCard';

const City = () => {
  const location = useLocation();
  const { cityId, name, isDomestic, country }: CityState = location.state;

  return (
    <>
      <FeedNav>{name}</FeedNav>
      <Styled.CityWrapper>
        <DetailFeedShorts cityId={cityId} placeName={name} />
        <Gallery id={cityId} placeName={name} />
        {!isDomestic && <CityInformation cityId={cityId} />}
        <Weather cityId={cityId} />
        {!isDomestic && <ExchangeRate cityId={cityId} country={country} />}
        <CityTopReview cityId={cityId} cityName={name} />
        <HotPlace cityId={cityId} cityName={name} />
        <Banner isDomestic={isDomestic} />
      </Styled.CityWrapper>
    </>
  );
};

export default City;
