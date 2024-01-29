import { Rating } from '@mui/material';
import { Text } from '@/components/common';
import * as Styled from './MapSpotInfoBox.styles';
import googleLogo from '/images/googleLogo.png';

const MapGoogleSpot = ({
  googlePlaceData,
}: {
  googlePlaceData: PlaceType | null;
}) => {
  return (
    <a href={googlePlaceData?.googleMapsUri} target="_blank" rel="noreferrer">
      <Styled.MapSpotInfoBoxWrapper>
        <Styled.SpotImg src={googleLogo} alt="구글 로고" />
        <Styled.SpotDescription>
          <Styled.GoogleSpotDesc>
            <Text fontWeight={700}>{googlePlaceData?.displayName.text}</Text>
            <Styled.NumberBox>
              <Text fontSize={12} color="gray">
                {googlePlaceData?.rating}
              </Text>
              <Rating
                name="read-only"
                value={googlePlaceData?.rating}
                readOnly
              />
              <Text fontSize={12} color="gray">
                ({googlePlaceData?.userRatingCount})
              </Text>
            </Styled.NumberBox>
          </Styled.GoogleSpotDesc>
        </Styled.SpotDescription>
      </Styled.MapSpotInfoBoxWrapper>
    </a>
  );
};

export default MapGoogleSpot;
