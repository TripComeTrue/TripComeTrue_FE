import { SubTitle, Text } from '@/components/common';
import * as Styled from './Weather.styles';
import { WeatherProps } from '@/pages/DetailFeed/City/City.types';

const Weather = ({ weatherData }: WeatherProps) => {
  return (
    <Styled.WeatherWrapper>
      <SubTitle>날씨</SubTitle>
      <Styled.WeatherBox>
        {weatherData.map(({ maxAvgTempC, minAvgTempC, month }) => (
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
