import { ChangeEvent, useEffect, useState } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { SubTitle, Text } from '@/components/common';
import * as Styled from './ExchangeRate.styles';
import { getCityExchangeRate } from '@/apis/detailfeed';

const ExchangeRate = () => {
  const { id: cityId } = useParams() as { id: string };
  const [curMoney, setCurMoney] = useState(1);
  const [krMoney, setKrMoney] = useState(1);

  const { data: exchangeRateData } = useSuspenseQuery({
    queryKey: ['exchangeRate', cityId],
    queryFn: () => getCityExchangeRate(cityId),
  });
  const krw = Number(
    exchangeRateData?.exchangeRate.split(':')[1].replace(/,/gi, ''),
  );

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
  }, [exchangeRateData]);

  const { country, curUnit, curName } = exchangeRateData;

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
                {curUnit}({curName})
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
              {curUnit}
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
