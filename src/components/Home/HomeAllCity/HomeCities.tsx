import { HomeCitiesProps } from './HomeCities.types';
import * as Styled from './HomeCities.styles';

function HomeCities({ cities }: HomeCitiesProps) {
  return (
    <Styled.CityWrap>
      {cities.map((city) => (
        <Styled.CityItem key={city.name}>{city.name}</Styled.CityItem>
      ))}
    </Styled.CityWrap>
  );
}

export default HomeCities;
