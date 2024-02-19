import { useSuspenseQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { SubTitle, Text } from '@/components/common';
import * as Styled from './CityInformation.styles';
import languageImage from '/language.svg';
import moneyImage from '/money.svg';
import powerImage from '/power.svg';
import timeImage from '/time.svg';
import visaImage from '/visa.svg';
import { getCityInformation } from '@/apis/detailfeed';

const CityInformation = () => {
  const { id: cityId } = useParams() as { id: string };

  const { data: cityInformation } = useSuspenseQuery({
    queryKey: ['cityInformation', cityId],
    queryFn: () => getCityInformation(cityId),
  });

  const { language, timeDifference, curName, curUnit, voltage, visa } =
    cityInformation;

  const INFORMATION_DATA = [
    { content: language, svg: languageImage },
    { content: timeDifference, svg: timeImage },
    { content: `${curName}(${curUnit})`, svg: moneyImage },
    { content: voltage, svg: powerImage },
    { content: visa, svg: visaImage },
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
        {INFORMATION_DATA.map(({ svg, content }, index) => (
          <Styled.InformationItem key={index}>
            <Styled.InformationIconBox>
              <Styled.InformationIcon src={svg} alt="visa icon" />
            </Styled.InformationIconBox>
            <Text fontSize={13} fontWeight={700}>
              {content}
            </Text>
          </Styled.InformationItem>
        ))}
      </Styled.InformationBox>
    </Styled.InformationWrapper>
  );
};

export default CityInformation;
