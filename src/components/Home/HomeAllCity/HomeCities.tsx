import { useNavigate } from 'react-router-dom';
import { HomeCitiesProps } from './HomeCities.types';
import * as Styled from './HomeCities.styles';

function HomeCities({ cities }: HomeCitiesProps) {
  const navigate = useNavigate();

  function handleCityClick({ name, cityId, isDomestic }: CityState) {
    navigate(`/detailfeed/city/${cityId}`, {
      state: { cityId, name, isDomestic },
    });
  }
  return (
    <Styled.CityWrap>
      {cities.map(({ cityId, name, isDomestic }) => (
        <Styled.CityItem
          key={name}
          onClick={() => handleCityClick({ cityId, name, isDomestic })}>
          {name}
        </Styled.CityItem>
      ))}
    </Styled.CityWrap>
  );
}

export default HomeCities;
