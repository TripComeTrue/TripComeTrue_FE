import { useNavigate } from 'react-router-dom';
import * as Styled from './HomeCountryItem.styles';
import { HomeKoreaCitiesProps } from './HomeKoreaCityItem.types';

function HomeKoreaCities({ city }: HomeKoreaCitiesProps) {
  const navigate = useNavigate();

  if (!city) return null;

  function handleCityClick(cityId: number, isDomestic: string) {
    navigate(`/detailfeed/city/${isDomestic}/${cityId}`);
  }
  return (
    <Styled.KoreaItem
      key={city.name}
      $height={52}
      onClick={() => handleCityClick(city.cityId, city.isDomestic)}>
      {city.name}
    </Styled.KoreaItem>
  );
}

export default HomeKoreaCities;
