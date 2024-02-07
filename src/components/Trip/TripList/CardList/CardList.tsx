import { Fragment, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { TripCard } from '../..';
import * as Styled from './CardList.styles';
import { getTripRecords } from '@/apis/trip-records';
import { Spinners } from '@/components/common';

const CardList = () => {
  const [searchParams] = useSearchParams();
  const queryString = searchParams.toString();
  const [ref, inView] = useInView();
  const {
    data: tripRecordsData,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useSuspenseInfiniteQuery({
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
    <>
      <Styled.Container>
        {tripRecordsData.pages.map((page, index) => (
          <Fragment key={index}>
            {page.map((tripRecordData) => (
              <TripCard
                key={tripRecordData.tripRecordId}
                tripRecordData={tripRecordData}
              />
            ))}
          </Fragment>
        ))}
      </Styled.Container>
      {isFetchingNextPage ? <Spinners /> : tripRecordsData && <div ref={ref} />}
    </>
  );
};

export default CardList;
