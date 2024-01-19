import { useQueries } from '@tanstack/react-query';
import client from '@/apis';
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

const fetchData = async (url: string) => {
  const { data } = await client.get(url);
  return data.data;
};

const cityId = 5;

const City = () => {
  const results = useQueries({
    queries: [
      {
        queryKey: ['shorts'],
        queryFn: () => fetchData(`/cities/${cityId}/videos/list`),
        staleTime: 600000,
      },
      {
        queryKey: ['gallery'],
        queryFn: () => fetchData(`/cities/${cityId}/images/list`),
        staleTime: 600000,
      },
      {
        queryKey: ['cityInfo'],
        queryFn: () => fetchData(`/cities/${cityId}`),
        staleTime: 600000,
      },
      // {
      //   queryKey: ['exchangeRate'],
      //   queryFn: ()=>fetchData(`/cities/exchange-rates?curUnit=${}`),
      // },
      {
        queryKey: ['weather'],
        queryFn: () => fetchData(`/cities/${cityId}/weathers`),
        staleTime: 600000,
      },
      {
        queryKey: ['hotPlace'],
        queryFn: () => fetchData(`/cities/${cityId}/hot-places`),
        staleTime: 600000,
      },
    ],
  });

  console.log(results);

  return (
    <>
      <FeedNav>안목해변</FeedNav>
      <Styled.CityWrapper>
        <DetailFeedShorts />
        <Gallery />
        <CityInformation />
        <Weather />
        <ExchangeRate />
        <TopReview />
        <HotPlace />
        <Banner />
      </Styled.CityWrapper>
    </>
  );
};

export default City;
