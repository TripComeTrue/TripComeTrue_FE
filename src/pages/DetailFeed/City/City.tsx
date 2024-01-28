import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import { getCityStored } from '@/apis/detailfeed';
import {
  Banner,
  CityGallery,
  CityInformation,
  CityTopReview,
  DetailFeedShorts,
  ExchangeRate,
  HotPlace,
  Weather,
} from '@/components/DetailFeed';
import { FeedNav } from '@/components/common';
import * as Styled from './City.styles';

const City = () => {
  const location = useLocation();
  const { cityId, name, isDomestic }: CityState = location.state;

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['cityStore', cityId],
    queryFn: () => getCityStored(cityId),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>Data not available</p>;
  }

  const { isStored } = data;
  console.log(isDomestic);
  return (
    <>
      <FeedNav id={cityId} isStored={isStored} refetch={refetch}>
        {name}
      </FeedNav>
      <Styled.CityWrapper>
        <DetailFeedShorts cityId={cityId} placeName={name} />
        <CityGallery id={cityId} placeName={name} />
        {!isDomestic && <CityInformation cityId={cityId} />}
        <Weather cityId={cityId} />
        {!isDomestic && <ExchangeRate cityId={cityId} />}
        <CityTopReview cityId={cityId} cityName={name} />
        <HotPlace cityId={cityId} cityName={name} />
        <Banner isDomestic={isDomestic} />
      </Styled.CityWrapper>
    </>
  );
};

export default City;
