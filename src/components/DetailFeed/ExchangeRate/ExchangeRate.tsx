import { ChangeEvent, useEffect, useState } from 'react';
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
  const [curMoney, setCurMoney] = useState(1);
  const [krMoney, setKrMoney] = useState(1);
  const { data, isLoading } = useDetailFeedQuery<ExchangeRateResponseType>({
    queryKey: 'exchangeRate',
    id: cityId,
    fnUrl: `/v1/cities/${cityId}/exchange-rates`,
  });
  const curCityName = data?.data.curName.split(' ')[0];
  const krw = Number(data?.data.exchangeRate.split(':')[1]);

  const onChangeCurMoney = (event: ChangeEvent<HTMLInputElement>) => {
    if (/^\d*\.?\d*$/.test(event.target.value)) {
      setCurMoney(Number(event.target.value));
      setKrMoney(Number((krw * Number(event.target.value)).toFixed(4)));
    }
  };

  const onChangeKrMoney = (event: ChangeEvent<HTMLInputElement>) => {
    if (/^\d*\.?\d*$/.test(event.target.value)) {
      setKrMoney(Number(event.target.value));
      setCurMoney(Number((Number(event.target.value) / krw).toFixed(4)));
    }
  };

  useEffect(() => {
    if (krw) {
      setKrMoney(krw);
    }
  }, [data]);

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
              {curCityName}
            </Text>
            <Styled.CurrencyUnit>
              <Text fontSize={14} fontWeight={700} color="primary">
                {data.data.curUnit}({data.data.curName})
              </Text>
            </Styled.CurrencyUnit>
          </Styled.ContentLeftBox>
          <Styled.ContentRightBox>
            <Styled.Input
              type="text"
              value={curMoney}
              onChange={onChangeCurMoney}
            />
            <Text fontSize={18} fontWeight={700} color="gray">
              {data.data.curUnit}
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
            <Styled.Input
              type="text"
              value={krMoney}
              onChange={onChangeKrMoney}
            />
            <Text fontSize={18} fontWeight={700} color="gray">
              KRW
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
