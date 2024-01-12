import { SlArrowDown } from 'react-icons/sl';
import * as Styled from './HomeCountryItem.styles';
import { HomeKoreaCitiesProps } from './HomeKoreaCityItem.types';

function HomeKoreaCities({ city }: HomeKoreaCitiesProps) {
  if (!city) return null;
  return (
    <Styled.CountryItem key={city.name} $height={52}>
      <Styled.CountryItemButton $active="false">
        {city.name}
        <span className="down-icon">
          <SlArrowDown />
        </span>
      </Styled.CountryItemButton>
    </Styled.CountryItem>
  );
}

export default HomeKoreaCities;
