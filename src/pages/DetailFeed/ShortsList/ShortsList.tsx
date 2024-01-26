import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as Styled from './ShortsList.styles';
import ShortsSwiper from '@/components/common/Shorts/ShortsSwiper';
import { Filter, SimpleNav } from '@/components/common';
import { useDetailFeedQuery } from '@/hooks/DetailFeed/useDetailFeedQuery';

const ShortsList = () => {
  const location = useLocation();
  const { id, placeName } = location.state;
  const [selectedFilter, setSelectedFilter] = useState('최신순');
  const orderOption = selectedFilter === '최신순' ? 'created' : 'storedCount';
  const { data, isLoading } = useDetailFeedQuery<AllShortsResponseType>({
    queryKey: 'AllShotrs',
    id,
    fnUrl: `/cities/${id}/videos?sort=${orderOption},desc&page=0&size=6`,
  });

  const navigate = useNavigate();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data || !data.data) {
    return <p>Data not available</p>;
  }

  const SHORTS_DATA = data.data.content;
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
            tripRecordId,
            videoId,
          }) => (
            <div key={videoId}>
              <ShortsSwiper
                thumbnailUrl={profileImageUrl}
                tripRecordTitle={tripRecordTitle}
                storedCount={storedCount}
                tripRecordId={tripRecordId}
              />
            </div>
          ),
        )}
      </Styled.ShortsListBox>
    </Styled.ShortsListWrapper>
  );
};

export default ShortsList;
