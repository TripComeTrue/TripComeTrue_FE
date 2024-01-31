import { useQuery } from '@tanstack/react-query';
import { SubTitle, Text } from '@/components/common';
import * as Styled from './Weather.styles';
import { getCityWeather } from '@/apis/detailfeed';

const Weather = ({ cityId }: { cityId: string }) => {
  const { data: cityWeatherData, isLoading } = useQuery({
    queryKey: ['cityWeather', cityId],
    queryFn: () => getCityWeather(cityId),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!cityWeatherData) {
    return <p>Data not available</p>;
  }

  return (
    <Styled.WeatherWrapper>
      <SubTitle>날씨</SubTitle>
      <Styled.WeatherBox>
        {cityWeatherData.map(({ maxAvgTempC, minAvgTempC, month }) => (
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
