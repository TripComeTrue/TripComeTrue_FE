import { Rating } from '@mui/material';
import { Text } from '@/components/common';
import * as Styled from './MapSpotInfoBox.styles';
import googleLogo from '/images/googleLogo.png';
import GOOGLE_MAPS from '@/constants/map';

const MapGoogleSpot = ({
  googlePlaceData,
}: {
  googlePlaceData: PlaceType | null;
}) => {
  return (
    <a href={googlePlaceData?.googleMapsUri} target="_blank" rel="noreferrer">
      <Styled.MapSpotInfoBoxWrapper>
        <Styled.SpotImg
          src={
            `https://places.googleapis.com/v1/${googlePlaceData?.photos[0].name}/media?key=${GOOGLE_MAPS}&maxHeightPx=200&maxWidthPx=200` ||
            googleLogo
          }
          alt={googlePlaceData?.displayName.text || '구글 로고 사진'}
        />
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
