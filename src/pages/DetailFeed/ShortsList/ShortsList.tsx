import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLocation } from 'react-router-dom';
import ShortsSwiper from '@/components/common/Shorts/ShortsSwiper';
import { Filter, SimpleNav } from '@/components/common';
import { getCityShortsList } from '@/apis/listpage';
import * as Styled from './ShortsList.styles';

const ShortsList = () => {
  const location = useLocation();
  const { id, placeName } = location.state;
  const [selectedFilter, setSelectedFilter] = useState('최신순');
  const orderOption = selectedFilter === '최신순' ? 'created' : 'storedCount';
  const { ref, inView } = useInView();

  const { data, isLoading, fetchNextPage } = useInfiniteQuery({
    queryKey: ['cityAllShorts', id, orderOption],
    queryFn: ({ pageParam }) => getCityShortsList(id, orderOption, pageParam),
    staleTime: 0,
    initialPageParam: 0,
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

  const SHORTS_DATA = data.pages.flatMap((page) => page.content);

  console.log(SHORTS_DATA);
  return (
    <Styled.ShortsListWrapper>
      <SimpleNav>{placeName}</SimpleNav>
      <Styled.FilterBox>
        <Filter
          first="최신순"
          second="보관순"
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      </Styled.FilterBox>
      <Styled.ShortsListBox>
        {SHORTS_DATA.map(
          ({
            profileImageUrl,
            tripRecordTitle,
            storedCount,
            videoId,
            memberName,
            tripRecordId,
            memberId,
            thumbnailUrl,
            videoUrl,
          }) => (
            <ShortsSwiper
              key={videoId}
              thumbnailUrl={thumbnailUrl}
              tripRecordTitle={tripRecordTitle}
              storeCount={storedCount}
              profileImageUrl={profileImageUrl}
              memberName={memberName}
              tripRecordId={tripRecordId}
              memberId={memberId}
              videoUrl={videoUrl}
            />
          ),
        )}
      </Styled.ShortsListBox>
      <div ref={ref}>&nbsp;</div>
    </Styled.ShortsListWrapper>
  );
};

export default ShortsList;
