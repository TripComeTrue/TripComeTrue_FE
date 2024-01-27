import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Bookmark, Filter, SimpleNav } from '@/components/common';
import { useDetailFeedQuery } from '@/hooks/DetailFeed/useDetailFeedQuery';
import * as Styled from './GalleryList.styles';

const SpotGalleryList = () => {
  const location = useLocation();
  const { id, placeName } = location.state;
  const [selectedFilter, setSelectedFilter] = useState('최신순');
  const orderOption = selectedFilter === '최신순' ? 'createdAt ' : 'storeCount';
  const { data, isLoading } = useDetailFeedQuery<SpotGalleryResponseType>({
    queryKey: 'spotGalleryAll',
    id,
    fnUrl: `/v1/trip-records-schedules?placeId=${id}&page=0&size=18&orderBy=${orderOption}`,
  });
  const navigate = useNavigate();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>Data not available</p>;
  }
  const GALLERY_PHOTOS = data.data.content;
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
    </div>
  );
};

export default SpotGalleryList;
