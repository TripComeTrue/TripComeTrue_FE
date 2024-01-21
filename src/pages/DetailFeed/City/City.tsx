import { useQueries } from '@tanstack/react-query';
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
import { FeedNav } from '@/components/common';
import * as Styled from './City.styles';
import { QUERYS } from '@/constants/DetailFeed/City';

const City = ({ cityId = 5 }: { cityId: number }) => {
  const [
    { data: shortsData },
    { data: galleryData },
    { data: informationData },
    { data: weahterData },
    { data: hotPlaceData },
  ]: [
    // 수정 예정
    { data: ShortsDataType[] },
    { data: GalleryDataType[] },
    { data: CityInfoDataType },
    { data: WeatherDataType[] },
    { data: HotPlaceDataType[] },
  ] = useQueries({
    queries: QUERYS.map(({ key, fn }) => ({
      queryKey: [key],
      queryFn: () => fn(cityId),
      staleTime: 600000,
    })),
  });

  return (
    <>
      <FeedNav>안목해변</FeedNav>
      <Styled.CityWrapper>
        <DetailFeedShorts />
        <Gallery />
        {informationData && (
          <CityInformation cityInformation={informationData} />
        )}
        {weahterData && <Weather weatherData={weahterData} />}
        {informationData && <ExchangeRate curUnit={informationData.curUnit} />}
        <TopReview />
        <HotPlace />
        <Banner />
      </Styled.CityWrapper>
    </>
  );
};

export default City;
