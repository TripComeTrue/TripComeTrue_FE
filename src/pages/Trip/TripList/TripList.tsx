import { useInfiniteQuery } from '@tanstack/react-query';
import { Link, useSearchParams } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { SimpleNav, Spinners, SubTitle, Text } from '@/components/common';
import * as Styled from './TripList.styles';
import DollarIcon from '/images/dollar.svg';
import StarIcon from '/starIcon.svg';
import { CardList } from '@/components/Trip';
import { getTripRecords } from '@/apis/trip-records';
import CardListSkeleton from '@/components/Trip/TripList/CardList/CardListSkeleton';

const TripList = () => {
  const [searchParams] = useSearchParams();
  const queryString = searchParams.toString();
  const category = queryString.split('=')[0];
  const [ref, inView] = useInView();
  const {
    data: tripRecordsData,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['TripRecordsData'],
    queryFn: ({ pageParam }) =>
      getTripRecords({ pageParam, size: 10, filter: queryString }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      return lastPage.length !== 0 ? lastPageParam + 1 : null;
    },
  });

  useEffect(() => {
    if (hasNextPage && inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <Styled.Container>
      <SimpleNav>검색</SimpleNav>
      <Styled.MainContainer>
        <Link to="/search/search-non">
          <Styled.SearchButton>
            <Text color="white">‘저예산 여행’을 검색해 보세요.</Text>
          </Styled.SearchButton>
        </Link>
        {category === 'expenseRangeType' ? (
          <SubTitle margin="0 0 0.875rem 0" icon={DollarIcon}>
            100만원으로 다녀온 인생 여행
          </SubTitle>
        ) : (
          <SubTitle margin="0 0 0.875rem 0" icon={StarIcon}>
            1박 2일 여행 일정
          </SubTitle>
        )}

        {tripRecordsData ? (
          <CardList tripRecordsData={tripRecordsData} />
        ) : (
          <CardListSkeleton />
        )}
        {isFetchingNextPage ? (
          <Spinners />
        ) : (
          tripRecordsData && <div ref={ref} />
        )}
      </Styled.MainContainer>
    </Styled.Container>
  );
};

export default TripList;
