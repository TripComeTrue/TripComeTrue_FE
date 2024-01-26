import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Bookmark, Filter, SimpleNav } from '@/components/common';
import { useDetailFeedQuery } from '@/hooks/DetailFeed/useDetailFeedQuery';
import * as Styled from './GalleryList.styles';

const SpotGalleryList = () => {
  const location = useLocation();
  const { id, placeName } = location.state;
  const [selectedFilter, setSelectedFilter] = useState('최신순');

  const { data, isLoading } = useDetailFeedQuery<GalleryResponseType>({
    queryKey: 'spotGalleryAll',
    id,
    fnUrl: `/trip-records-schedules?placeId=${id}&page=0&size=18`,
  });

  const navigate = useNavigate();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data || !data.data) {
    return <p>Data not available</p>;
  }
  const GALLERY_PHOTOS = data.data;

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
          ({ imageUrl, tripRecordId, tripRecordStoreCount }, index) => (
            <Styled.PhotoBox
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              onClick={() => navigate(`/trip/detail/${tripRecordId}`)}>
              <Styled.BookMarkBox>
                <Bookmark count={tripRecordStoreCount} />
              </Styled.BookMarkBox>
              <Styled.Photo src={imageUrl} alt="사진" />
            </Styled.PhotoBox>
          ),
        )}
      </Styled.GalleryListBox>
    </div>
  );
};

export default SpotGalleryList;
