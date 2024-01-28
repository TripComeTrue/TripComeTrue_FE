import { useNavigate } from 'react-router-dom';
import { Text } from '@/components/common';
import * as Styled from './MapSpotInfoBox.styles';
import bookmark from '/bookmark.svg';
import comment from '/comment.svg';

const MapDefaultSpot = ({
  defaultPlaceData,
}: {
  defaultPlaceData: SpotsInCityData | null;
}) => {
  const navigate = useNavigate();
  const handleSpotClick = () => {
    navigate(`/detailfeed/spot/${defaultPlaceData?.placeId}`, {
      state: {
        placeId: defaultPlaceData?.placeId,
        placeName: defaultPlaceData?.placeName,
      },
    });
  };

  return (
    <Styled.MapSpotInfoBoxWrapper onClick={handleSpotClick}>
      <Styled.SpotImg src={defaultPlaceData?.imageUrl} alt="사진" />
      <Styled.SpotDescription>
        <Text fontWeight={700}>{defaultPlaceData?.placeName}</Text>
        <Styled.SpotDescCountBox>
          <Styled.SpotContent>
            <img src={comment} alt="댓글 아이콘" />
            <Text fontSize={12} fontWeight={700} color="gray">
              {defaultPlaceData?.commentTotal}
            </Text>
          </Styled.SpotContent>
          <Styled.SpotContent>
            <img src={bookmark} alt="북마크 아이콘" />
            <Text fontSize={12} fontWeight={700} color="gray">
              {defaultPlaceData?.storedCount}
            </Text>
          </Styled.SpotContent>
        </Styled.SpotDescCountBox>
      </Styled.SpotDescription>
    </Styled.MapSpotInfoBoxWrapper>
  );
};

export default MapDefaultSpot;
