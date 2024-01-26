import { SubTitle, Text } from '@/components/common';
import { useDetailFeedQuery } from '@/hooks/DetailFeed/useDetailFeedQuery';
import * as Styled from './ExchangeRate.styles';

const ExchangeRate = ({
  cityId,
  country,
}: {
  cityId: number;
  country?: string;
}) => {
  const { data, isLoading } = useDetailFeedQuery<ExchangeRateResponseType>({
    queryKey: 'exchangeRate',
    id: cityId,
    fnUrl: `/v1/cities/${cityId}/exchange-rates`,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data || !data.data) {
    return <p>Data not available</p>;
  }

  return (
    <Styled.ExchangeRateWrapper>
      <SubTitle>환율</SubTitle>
      <Styled.ExchangeRateBox>
        <Styled.ExchangeRateContent>
          <Styled.ContentLeftBox>
            <Text fontSize={14} fontWeight={700}>
              {country}
            </Text>
            <Styled.CurrencyUnit>
              <Text fontSize={14} fontWeight={700} color="primary">
                {data.data.curUnit}({data.data.curName})
              </Text>
            </Styled.CurrencyUnit>
          </Styled.ContentLeftBox>
          <Styled.ContentRightBox>
            <Text fontSize={18} fontWeight={700} color="gray">
              1 {data.data.curUnit}
            </Text>
          </Styled.ContentRightBox>
        </Styled.ExchangeRateContent>
        <Styled.BoxLine />
        <Styled.ExchangeRateContent>
          <Styled.ContentLeftBox>
            <Text fontSize={14} fontWeight={700}>
              대한민국
            </Text>
            <Styled.CurrencyUnit>
              <Text fontSize={14} fontWeight={700} color="primary">
                KRW(원)
              </Text>
            </Styled.CurrencyUnit>
          </Styled.ContentLeftBox>
          <Styled.ContentRightBox>
            <Text fontSize={18} fontWeight={700} color="gray">
              {data.data.exchangeRate.split(':')[1]} KRW
            </Text>
          </Styled.ContentRightBox>
        </Styled.ExchangeRateContent>
      </Styled.ExchangeRateBox>
      <Styled.ExchangeRateSource>
        <Text fontSize={10}>Powered By</Text>
        <Text fontSize={10} fontWeight={700}>
          한국수출입은행
        </Text>
      </Styled.ExchangeRateSource>
    </Styled.ExchangeRateWrapper>
  );
};

export default ExchangeRate;
