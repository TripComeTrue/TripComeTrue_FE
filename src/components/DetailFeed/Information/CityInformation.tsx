import { SubTitle, Text } from '@/components/common';
import * as Styled from './CityInformation.styles';
import visaImage from '/visa.svg';
import moneyImage from '/money.svg';
import timeImage from '/time.svg';
import languageImage from '/language.svg';
import powerImage from '/power.svg';
import { CityInfoProps } from '@/pages/DetailFeed/City/City.types';

const CityInformation = ({ cityInformation }: CityInfoProps) => {
  const { language, timeDifference, curName, curUnit, voltage, visa } =
    cityInformation;
  const INFORMATION_DATA = [
    { id: 1, content: language, svg: languageImage },
    { id: 2, content: timeDifference, svg: timeImage },
    { id: 3, content: `${curName}(${curUnit})`, svg: moneyImage },
    { id: 4, content: voltage, svg: powerImage },
    { id: 5, content: visa, svg: visaImage },
  ];
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
