import { useNavigate } from 'react-router-dom';
import * as Styled from './HomeCountryItem.styles';
import { HomeKoreaCitiesProps } from './HomeKoreaCityItem.types';

function HomeKoreaCities({ city }: HomeKoreaCitiesProps) {
  const navigate = useNavigate();

  if (!city) return null;

  function handleCityClick({ name, cityId, isDomestic }: CityState) {
    navigate(`/detailfeed/city/${cityId}`, {
      state: { name, cityId, isDomestic },
    });
  }
  return (
    <Styled.KoreaItem
      key={city.name}
      $height={52}
      onClick={() =>
        handleCityClick({
          cityId: city.cityId,
          name: city.name,
          isDomestic: city.isDomestic,
        })
      }>
      {city.name}
    </Styled.KoreaItem>
  );
}

export default HomeKoreaCities;
