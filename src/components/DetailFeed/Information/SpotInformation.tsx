import { SubTitle, Text } from '@/components/common';
import * as Styled from './SpotInformation.styles';
import Map from '@/components/Map/Map';
import phone from '/infoPhone.svg';
import pin from '/infoPin.svg';
import time from '/infoTime.svg';

const SPOT_INFORMATION_DATA = [
  {
    id: 1,
    icon: pin,
    title: '주소',
    content: '강원도 강릉시 창해로 14번길',
  },
  { id: 2, icon: phone, title: '전화번호', content: '+82336603887' },
  {
    id: 3,
    icon: time,
    title: '홈페이지',
    content: 'http://anmokbeach.co.kr/',
  },
];

const SpotInformation = () => {
  return (
    <Styled.SpotInfoWrapper>
      <SubTitle>기본정보</SubTitle>
      <Map center={{ lat: 37.779391, lng: 128.93 }} />
      <Styled.SpotInfoBox>
        {SPOT_INFORMATION_DATA.map(({ id, icon, title, content }) => (
          <Styled.SpotInfo key={id}>
            <Styled.InfoIcon src={icon} />
            <Text fontSize={10} fontWeight={700}>
              {title}:
            </Text>
            <Text fontSize={10}>{content}</Text>
          </Styled.SpotInfo>
        ))}
      </Styled.SpotInfoBox>
    </Styled.SpotInfoWrapper>
  );
};

export default SpotInformation;
