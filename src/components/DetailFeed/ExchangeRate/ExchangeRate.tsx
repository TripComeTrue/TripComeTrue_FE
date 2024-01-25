import { useQuery } from '@tanstack/react-query';
import { SubTitle, Text } from '@/components/common';
import * as Styled from './ExchangeRate.styles';
import { ExchangeRateType } from '@/pages/DetailFeed/City/City.types';
import { getExchangeRate } from '@/apis/cityFeed';

const ExchangeRate = ({ cityId }: { cityId: number }) => {
  const { data, isLoading } = useQuery<ExchangeRateType>({
    queryKey: ['exchangeRate', curUnit],
    queryFn: () => getExchangeRate(curUnit),
    staleTime: 600000,
  });

  if (isLoading) return <div>Loding....</div>;
  return (
    <Styled.ExchangeRateWrapper>
      <SubTitle>환율</SubTitle>
      <Styled.ExchangeRateBox>
        <Styled.ExchangeRateContent>
          <Styled.ContentLeftBox>
            <Text fontSize={14} fontWeight={700}>
              태국
            </Text>
            <Styled.CurrencyUnit>
              <Text fontSize={14} fontWeight={700} color="primary">
                {data?.curUnit}({data?.curName})
              </Text>
            </Styled.CurrencyUnit>
          </Styled.ContentLeftBox>
          <Styled.ContentRightBox>
            <Text fontSize={18} fontWeight={700} color="gray">
              1 {data?.curUnit}
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
              {data?.exchangeRate.split(':')[1]} KRW
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
