import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { Bookmark, Filter, SimpleNav } from '@/components/common';
import * as Styled from './GalleryList.styles';
import { getSpotGalleryList } from '@/apis/listpage';

const SpotGalleryList = () => {
  const navigate = useNavigate();
  const { placeId, placeName } = useParams() as unknown as {
    placeId: string;
    placeName: string;
  };
  const [selectedFilter, setSelectedFilter] = useState('최신순');
  const orderOption = selectedFilter === '최신순' ? 'createdAt ' : 'storeCount';
  const { ref, inView } = useInView();

  const { data, isLoading, fetchNextPage } = useInfiniteQuery({
    queryKey: ['spotGalleryAll', placeId, orderOption],
    staleTime: 0,
    initialPageParam: 0,
    queryFn: ({ pageParam }) =>
      getSpotGalleryList(placeId, orderOption, pageParam),
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
  const GALLERY_PHOTOS = data.pages.flatMap((page) => page.content);
  return (
    <div>
      <SimpleNav>{placeName}</SimpleNav>
      <Styled.FilterBox>
        <Filter
          first="최신순"
          second="보관순"
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      </Styled.FilterBox>
      <Styled.GalleryListBox>
        {GALLERY_PHOTOS.map(
          ({ imageUrl, tripRecordId, tripRecordStoreCount }) => (
            <Styled.PhotoBox
              key={tripRecordId}
              onClick={() => navigate(`/trip/detail/${tripRecordId}`)}>
              <Styled.BookMarkBox>
                <Bookmark count={tripRecordStoreCount} />
              </Styled.BookMarkBox>
              <Styled.Photo src={imageUrl} alt="사진" />
            </Styled.PhotoBox>
          ),
        )}
      </Styled.GalleryListBox>
      <div ref={ref}>&nbsp;</div>
    </div>
  );
};

export default SpotGalleryList;
