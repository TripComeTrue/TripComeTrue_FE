import { SubTitle, Text } from '@/components/common';
import * as Styled from './Weather.styles';

const WEATEHR_DATA = [
  { id: 1, month: '12월', temperature: { high: '32°', low: '23°' } },
  { id: 2, month: '1월', temperature: { high: '32°', low: '23°' } },
  { id: 3, month: '2월', temperature: { high: '32°', low: '23°' } },
  { id: 4, month: '3월', temperature: { high: '32°', low: '23°' } },
];

const Weather = () => {
  return (
    <Styled.WeatherWrapper>
      <SubTitle margin="1rem">날씨</SubTitle>
      <Styled.WeatherBox>
        {WEATEHR_DATA.map((data) => (
          <Styled.WeatherItem key={data.id}>
            <Styled.WeatherMonth>
              <Text fontSize={12} color="primary">
                {data.month}
              </Text>
            </Styled.WeatherMonth>
            <Styled.WeatherTemperature>
              <Text fontSize={18} color="black">
                {data.temperature.high}
              </Text>
              <Text fontSize={18} color="gray">
                {data.temperature.low}
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
