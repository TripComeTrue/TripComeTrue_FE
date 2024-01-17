import { useState } from 'react';
import { SlArrowDown } from 'react-icons/sl';
import { HomeCountryItemProps } from './HomeCountryItem.types';
import * as Styled from './HomeCountryItem.styles';
import HomeCities from './HomeCities';

function HomeCountryItem({ country }: HomeCountryItemProps) {
  const [selectedCountry, setSelectedCountry] = useState<string>();
  const [height, setHeight] = useState(52);

  const onClickCountry = (countryName: string) => {
    if (!country) return;
    setSelectedCountry(
      selectedCountry === countryName ? undefined : countryName,
    );
    setHeight(
      selectedCountry === countryName ? 52 : country.city.length * 32 + 72,
    );
  };

  if (!country) return null;
  return (
    <Styled.CountryItem key={country.name} $height={height}>
      <Styled.CountryItemButton
        $active={`${selectedCountry === country.name}`}
        onClick={() => onClickCountry(country.name)}>
        {country.name}
        <span className="down-icon">
          <SlArrowDown />
        </span>
      </Styled.CountryItemButton>
      <HomeCities cities={country.city} />
    </Styled.CountryItem>
  );
}

export default HomeCountryItem;
