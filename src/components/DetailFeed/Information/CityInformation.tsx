import { SubTitle, Text } from '@/components/common';
import { useDetailFeedQuery } from '@/hooks/DetailFeed/useDetailFeedQuery';
import * as Styled from './CityInformation.styles';
import languageImage from '/language.svg';
import moneyImage from '/money.svg';
import powerImage from '/power.svg';
import timeImage from '/time.svg';
import visaImage from '/visa.svg';

const CityInformation = ({ cityId }: { cityId: number }) => {
  const { data, isLoading } = useDetailFeedQuery<CityInfoResponseType>({
    queryKey: 'information',
    id: cityId,
    fnUrl: `/cities/${cityId}`,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data || !data.data) {
    return <p>Data not available</p>;
  }

  const { language, timeDifference, curName, curUnit, voltage, visa } =
    data.data;

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
        {INFORMATION_DATA.map(({ id, svg, content }) => (
          <Styled.InformationItem key={id}>
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
