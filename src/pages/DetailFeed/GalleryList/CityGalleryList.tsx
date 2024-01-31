import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { Bookmark, Filter, SimpleNav } from '@/components/common';
import * as Styled from './GalleryList.styles';
import { getCityGalleryList } from '@/apis/listpage';

const CityGalleryList = () => {
  const { cityName, cityId } = useParams() as {
    cityName: string;
    cityId: string;
  };
  const [selectedFilter, setSelectedFilter] = useState('최신순');
  const order = selectedFilter === '최신순' ? 'createdAt' : 'storedCount';
  const { ref, inView } = useInView();

  const {
    data: cityGalleryAll,
    isLoading,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['cityGalleryAll', cityId, order],
    queryFn: ({ pageParam }) => getCityGalleryList(cityId, order, pageParam),
    staleTime: 0,
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      return !lastPage.last ? lastPageParam + 1 : null;
    },
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!cityGalleryAll) {
    return <p>Data not available</p>;
  }
  const GALLERY_PHOTOS = cityGalleryAll.pages.flatMap((page) => page.content);

  return (
    <div>
      <SimpleNav>{cityName}</SimpleNav>
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
          ({ imageUrl, tripRecordId, tripRecordStoreCount, imageId }) => (
            <Styled.PhotoBox
              key={imageId}
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

export default CityGalleryList;
