import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useParams } from 'react-router-dom';
import { getSpotList } from '@/apis/listpage';
import { SearchedSpot } from '@/components/DetailFeed';
import { Filter } from '@/components/common';
import SpotListNav from '@/components/common/Navigation/SpotListNav';
import * as Styled from './SpotList.styles';

const SpotList = () => {
  const { ref, inView } = useInView();
  const { cityName, cityId } = useParams() as {
    cityName: string;
    cityId: string;
  };

  const [selectedFilter, setSelectedFilter] = useState('보관순');
  const orderOption =
    selectedFilter === '보관순' ? 'storedCount' : 'totalComments';
  const {
    data: cityHotPlace,
    isLoading,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['hotPlace', cityId, orderOption],
    staleTime: 0,
    initialPageParam: 0,
    queryFn: ({ pageParam }) => getSpotList(cityId, orderOption, pageParam),
    getNextPageParam: (lastPage, _, lastPageParam) => {
      return !lastPage.last ? lastPageParam + 1 : null;
    },
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!cityHotPlace) {
    return <p>Data not available</p>;
  }

  const SPOT_DATA = cityHotPlace.pages.flatMap((page) => page.content);
  return (
    <div>
      <SpotListNav cityId={cityId} cityName={cityName}>
        {cityName}
      </SpotListNav>
      <Styled.FilterBox>
        <Filter
          first="보관순"
          second="리뷰순"
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      </Styled.FilterBox>
      <Styled.SpotListWrapper>
        {SPOT_DATA.map(
          ({ placeId, placeName, storedCount, commentTotal, imageUrl }) => (
            <SearchedSpot
              key={placeId}
              placeId={placeId}
              placeName={placeName}
              storedCount={storedCount}
              commentTotal={commentTotal}
              imageUrl={imageUrl}
            />
          ),
        )}
      </Styled.SpotListWrapper>
      <div ref={ref}>&nbsp;</div>
    </div>
  );
};

export default SpotList;
