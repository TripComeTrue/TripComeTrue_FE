import { SubTitle, Text } from '@/components/common';
import * as Styled from './SpotInformation.styles';
import Map from '@/components/Map/Map';
import phone from '/infoPhone.svg';
import pin from '/infoPin.svg';
import time from '/infoTime.svg';
import { useDetailFeedQuery } from '@/hooks/DetailFeed/useDetailFeedQuery';

const SpotInformation = ({ id }: { id: number }) => {
  const { data, isLoading } = useDetailFeedQuery<SpotInfoResponseType>({
    queryKey: 'spotMapInfo',
    id,
    fnUrl: `/places/${id}`,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data || !data.data) {
    return <p>Data not available</p>;
  }
  const { address, name, latitude, longitude, phoneNumber } = data.data;
  return (
    <Styled.SpotInfoWrapper>
      <SubTitle>기본정보</SubTitle>
      <Map spotName={name} spotCenter={{ lat: latitude, lng: longitude }} />
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
