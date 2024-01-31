import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getCityInformation } from '@/apis/detailfeed';
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
  const { cityId } = useParams() as { cityId: string };

  const { data: cityInformation, isLoading } = useQuery({
    queryKey: ['cityInformation', cityId],
    queryFn: () => getCityInformation(cityId),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!cityInformation) {
    return <p>Data not available</p>;
  }
  const { name, language } = cityInformation;
  const isDomestic = language === '한국어';

  return (
    <>
      {/* <FeedNav cityId={cityId}>{name}</FeedNav> */}
      <Styled.CityWrapper>
        <DetailFeedShorts cityId={cityId} cityName={name} />
        <CityGallery cityId={cityId} cityName={name} />
        {!isDomestic && <CityInformation cityInformation={cityInformation} />}
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
