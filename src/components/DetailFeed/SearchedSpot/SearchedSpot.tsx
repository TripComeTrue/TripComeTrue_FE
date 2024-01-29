import { useNavigate } from 'react-router-dom';
import SpotDescription from './SpotDescription';
import * as Styled from './SearchedSpot.styles';

const SearchedSpot = ({
  placeId,
  placeName,
  storedCount,
  commentTotal,
  imageUrl,
}: SpotListDataType) => {
  const navigate = useNavigate();
  const handleSpotClick = (spotId: number, spotName: string) => {
    navigate(`/detailfeed/spot/${spotId}`, {
      state: { placeId, placeName: spotName },
    });
  };
  return (
    <Styled.SpotBox onClick={() => handleSpotClick(placeId, placeName)}>
      <Styled.SpotImg src={imageUrl} alt={placeName} />
      <Styled.SpotDescription>
        <SpotDescription
          placeName={placeName}
          storedCount={storedCount}
          commentTotal={commentTotal}
        />
      </Styled.SpotDescription>
    </Styled.SpotBox>
  );
};

export default SearchedSpot;
