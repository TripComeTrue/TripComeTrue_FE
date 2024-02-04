import { useNavigate } from 'react-router-dom';
import { HomeCitiesProps } from './HomeCities.types';
import * as Styled from './HomeCities.styles';

const HomeCities = ({ cities }: HomeCitiesProps) => {
  const navigate = useNavigate();

  function handleCityClick(cityId: number, isDomestic: string) {
    navigate(`/detailfeed/city/${isDomestic}/${cityId}`);
  }
  return (
    <Styled.CityWrap>
      {cities.map(({ cityId, name, isDomestic }) => (
        <Styled.CityItem
          key={name}
          onClick={() => handleCityClick(cityId, isDomestic)}>
          {name}
        </Styled.CityItem>
      ))}
    </Styled.CityWrap>
  );
};

export default HomeCities;
