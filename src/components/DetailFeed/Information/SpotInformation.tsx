import { useNavigate } from 'react-router-dom';
import Map from '@/components/Map/Map';
import { SubTitle, Text } from '@/components/common';
import { SpotInformationProps } from './Information.types';
import * as Styled from './SpotInformation.styles';
import phone from '/infoPhone.svg';
import pin from '/images/marker.svg';

const SpotInformation = ({
  address,
  latitude,
  longitude,
  phoneNumber,
  cityId,
}: SpotInformationProps) => {
  const navigate = useNavigate();
  const handleSpotMapClick = () => {
    navigate(`/detailfeed/tripmap/${cityId}`);
  };
  return (
    <Styled.SpotInfoWrapper>
      <SubTitle>기본정보</SubTitle>
      <Styled.SpotMapContainer onClick={handleSpotMapClick}>
        <Map spotCenter={{ lat: latitude, lng: longitude }} />
      </Styled.SpotMapContainer>
      <Styled.SpotInfoBox>
        <Styled.SpotInfo>
          <Styled.InfoIcon src={pin} />
          <Text fontSize={10} fontWeight={700}>
            주소:
          </Text>
          <Text fontSize={10}>{address}</Text>
        </Styled.SpotInfo>
        {phoneNumber && (
          <Styled.SpotInfo>
            <Styled.InfoIcon src={phone} />
            <Text fontSize={10} fontWeight={700}>
              전화번호:
            </Text>
            <Text fontSize={10}>{phoneNumber}</Text>
          </Styled.SpotInfo>
        )}
      </Styled.SpotInfoBox>
    </Styled.SpotInfoWrapper>
  );
};

export default SpotInformation;
