import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLocation } from 'react-router-dom';
import { getSpotList } from '@/apis/listpage';
import { SearchedSpot } from '@/components/DetailFeed';
import { Filter } from '@/components/common';
import SpotListNav from '@/components/common/Navigation/SpotListNav';
import * as Styled from './SpotList.styles';

const SpotList = () => {
  const location = useLocation();
  const { ref, inView } = useInView();

  const [selectedFilter, setSelectedFilter] = useState('보관순');
  const orderOption =
    selectedFilter === '보관순' ? 'storedCount' : 'totalComments';
  const { id, placeName } = location.state as {
    id: number;
    placeName: string;
  };
  const { data, isLoading, fetchNextPage } = useInfiniteQuery({
    queryKey: ['hotPlace', id, orderOption],
    staleTime: 0,
    initialPageParam: 0,
    queryFn: ({ pageParam }) => getSpotList(id, orderOption, pageParam),
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

  if (!data) {
    return <p>Data not available</p>;
  }

  const SPOT_DATA = data.pages.flatMap((page) => page.content);
  return (
    <div>
      <SpotListNav cityId={id} placeName={placeName}>
        {placeName}
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
        {SPOT_DATA.map((spot) => (
          <SearchedSpot
            key={spot.placeId}
            placeId={spot.placeId}
            placeName={spot.placeName}
            storedCount={spot.storedCount}
            commentTotal={spot.commentTotal}
            imageUrl={spot.imageUrl}
          />
        ))}
      </Styled.SpotListWrapper>
      <div ref={ref}>&nbsp;</div>
    </div>
  );
};

export default SpotList;
