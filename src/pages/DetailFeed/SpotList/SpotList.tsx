import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SpotListNav from '@/components/common/Navigation/SpotListNav';
import SpotDescription from './SpotDescription';
import * as Styled from './SpotList.styles';
import { useDetailFeedQuery } from '@/hooks/DetailFeed/useDetailFeedQuery';
import { Filter } from '@/components/common';

const SpotList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedFilter, setSelectedFilter] = useState('보관순');
  const orderOption =
    selectedFilter === '보관순' ? 'storedCount' : 'totalComments';
  const { id, placeName } = location.state;
  const { data, isLoading } = useDetailFeedQuery<SpotListResponse>({
    queryKey: 'hotPlace',
    id,
    fnUrl: `/v1/cities/${id}/places?sort=${orderOption},desc&page=0&size=`,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data || !data.data) {
    return <p>Data not available</p>;
  }

  const handleSpotClick = (placeId: number, spotName: string) => {
    navigate(`/detailfeed/spot/${placeId}`, {
      state: { placeId, placeName: spotName },
    });
  };

  const SPOT_DATA = data.data.content;
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
    </div>
  );
};

export default SpotList;
