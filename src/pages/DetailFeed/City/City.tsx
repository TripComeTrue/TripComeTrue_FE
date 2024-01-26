import { useLocation } from 'react-router-dom';
import {
  Banner,
  CityInformation,
  DetailFeedShorts,
  ExchangeRate,
  CityGallery,
  HotPlace,
  CityTopReview,
  Weather,
} from '@/components/DetailFeed';
import { FeedNav } from '@/components/common';
import * as Styled from './City.styles';

const City = () => {
  const location = useLocation();
  const { cityId, name, isDomestic, country }: CityState = location.state;

  return (
    <>
      <FeedNav id={cityId}>{name}</FeedNav>
      <Styled.CityWrapper>
        <DetailFeedShorts cityId={cityId} placeName={name} />
        <CityGallery id={cityId} placeName={name} />
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
