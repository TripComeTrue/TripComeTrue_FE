import { useEffect, useState } from 'react';
import searchGreen from '/searchGreen.svg';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { useParams } from 'react-router-dom';
import { getSearchedSpots } from '@/apis/listpage';
import * as Styled from './SpotSearch.styles';
import { SimpleNav } from '@/components/common';
import { SearchedSpot } from '@/components/DetailFeed';

const SpotSearch = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const { ref, inView } = useInView();
  const { cityId } = useParams() as unknown as { cityId: number };

  const { data, fetchNextPage, refetch } = useInfiniteQuery({
    queryKey: ['searchedSpot'],
    staleTime: 0,
    initialPageParam: 0,
    enabled: false,
    retry: 0,
    queryFn: ({ pageParam }) =>
      getSearchedSpots(cityId, searchValue, pageParam),
    getNextPageParam: (lastPage, _, lastPageParam) => {
      return !lastPage.last ? lastPageParam + 1 : null;
    },
  });

  const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    setIsSearching(true);
    refetch();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    if (inView && isSearching) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView, isSearching]);

  const SPOT_DATA = data?.pages.flatMap((page) => page.content);

  return (
    <div>
      <SimpleNav>장소 검색</SimpleNav>
      <Styled.SpotSearchWrapper>
        <Styled.SpotSearchBox>
          <Styled.SpotSearchInput
            type="text"
            placeholder="장소를 검색하세요"
            value={searchValue}
            onChange={onChangeSearchValue}
            onKeyDown={handleKeyDown}
          />
          <img src={searchGreen} alt="검색 아이콘" />
        </Styled.SpotSearchBox>
        <Styled.SpotListWrapper>
          {SPOT_DATA &&
            SPOT_DATA.map((spot) => (
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
      </Styled.SpotSearchWrapper>
      <div ref={ref}>&nbsp;</div>
    </div>
  );
};

export default SpotSearch;
