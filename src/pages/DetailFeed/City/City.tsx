import { useLocation, useParams } from 'react-router-dom';
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
  const { isDomestic } = location.state as { isDomestic: string };
  const domestic = isDomestic === '국내';
  return (
    <>
      <FeedNav />
      <Styled.CityWrapper>
        <DetailFeedShorts />
        <CityGallery />
        {!domestic && <CityInformation />}
        <Weather />
        {!domestic && <ExchangeRate />}
        <CityTopReview />
        <HotPlace />
        <Banner />
      </Styled.CityWrapper>
    </>
  );
};

export default City;
