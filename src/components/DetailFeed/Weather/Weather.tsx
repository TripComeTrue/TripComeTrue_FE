import { SubTitle, Text } from '@/components/common';
import { useDetailFeedQuery } from '@/hooks/DetailFeed/useDetailFeedQuery';
import * as Styled from './Weather.styles';

const Weather = ({ cityId }: { cityId: number }) => {
  const { data, isLoading } = useDetailFeedQuery<WeatherResponseType>({
    queryKey: 'weather',
    id: cityId,
    fnUrl: `/cities/${cityId}/weathers`,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data || !data.data) {
    return <p>Data not available</p>;
  }
  return (
    <Styled.WeatherWrapper>
      <SubTitle>날씨</SubTitle>
      <Styled.WeatherBox>
        {data.data.map(({ maxAvgTempC, minAvgTempC, month }) => (
          <Styled.WeatherItem key={month}>
            <Styled.WeatherMonth>
              <Text fontSize={12} color="primary">
                {month}월
              </Text>
            </Styled.WeatherMonth>
            <Styled.WeatherTemperature>
              <Text fontSize={18} color="black">
                {Math.ceil(maxAvgTempC)}°
              </Text>
              <Text fontSize={18} color="gray">
                {Math.ceil(minAvgTempC)}°
              </Text>
            </Styled.WeatherTemperature>
          </Styled.WeatherItem>
        ))}
      </Styled.WeatherBox>
      <Styled.WeatherSource>
        <Text fontSize={10}>Powered By</Text>
        <Text fontSize={10} fontWeight={700}>
          Forecast
        </Text>
      </Styled.WeatherSource>
    </Styled.WeatherWrapper>
  );
};

export default Weather;
