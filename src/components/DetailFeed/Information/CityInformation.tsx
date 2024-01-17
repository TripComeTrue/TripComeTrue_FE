import { SubTitle, Text } from '@/components/common';
import * as Styled from './CityInformation.styles';
import visa from '/visa.svg';
import money from '/money.svg';
import time from '/time.svg';
import language from '/language.svg';
import power from '/power.svg';

const INFORMATION_DATA = [
  { id: 1, content: '태국어', svg: language },
  { id: 2, content: '2시간 느림', svg: time },
  { id: 3, content: '바트(THB)', svg: money },
  { id: 4, content: '220V', svg: power },
  { id: 5, content: '90일 무비자 체류', svg: visa },
];

const CityInformation = () => {
  return (
    <Styled.InformationWrapper>
      <Styled.SubTitleBox>
        <SubTitle>기본 정보</SubTitle>
      </Styled.SubTitleBox>
      <Styled.InformationBox
        spaceBetween={8}
        slidesPerView={2.6}
        scrollbar={{ draggable: true, el: '.swiper-scrollbar', hide: false }}>
        {INFORMATION_DATA.map((data) => (
          <Styled.InformationItem key={data.id}>
            <Styled.InformationIconBox>
              <Styled.InformationIcon src={data.svg} alt="visa icon" />
            </Styled.InformationIconBox>
            <Text fontSize={13} fontWeight={700}>
              {data.content}
            </Text>
          </Styled.InformationItem>
        ))}
      </Styled.InformationBox>
    </Styled.InformationWrapper>
  );
};

export default CityInformation;
