import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
import SpotListNav from '@/components/common/Navigation/SpotListNav';
import SpotDescription from './SpotDescription';
import * as Styled from './SpotList.styles';
import { Filter } from '@/components/common';
import { getSpotList } from '@/apis/listpage';

const SpotList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { ref, inView } = useInView();

  const [selectedFilter, setSelectedFilter] = useState('보관순');
  const orderOption =
    selectedFilter === '보관순' ? 'storedCount' : 'totalComments';
  const { id, placeName } = location.state;
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

  const handleSpotClick = (placeId: number, spotName: string) => {
    navigate(`/detailfeed/spot/${placeId}`, {
      state: { placeId, placeName: spotName },
    });
  };

  const SPOT_DATA = data.pages.flatMap((page) => page.content);
  return (
    <div>
      <SpotListNav>{placeName}</SpotListNav>
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
          <Styled.SpotBox
            key={spot.placeId}
            onClick={() => handleSpotClick(spot.placeId, spot.placeName)}>
            <Styled.SpotImg src={spot.imageUrl} alt={spot.placeName} />
            <Styled.SpotDescription>
              <SpotDescription spot={spot} />
            </Styled.SpotDescription>
          </Styled.SpotBox>
        ))}
      </Styled.SpotListWrapper>
      <div ref={ref}>&nbsp;</div>
    </div>
  );
};

export default SpotList;
