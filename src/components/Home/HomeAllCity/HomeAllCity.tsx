import { useEffect, useState } from 'react';
import * as Styled from './HomeAllCity.styles';
import { SimpleNav } from '@/components/common';
import ALL_CITY from '@/constants/city';
import HomeCountryItem from './HomeCountryItem';
import HomeKoreaCities from './HomeKoreaCityItem';

function HomeAllCity() {
  const [selectedContinent, setSelectedContinent] = useState<string>();
  const onClickContinent = (continent: string) => {
    setSelectedContinent(continent);
  };
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);
  const continents = Object.keys(ALL_CITY);

  return (
    <>
      <SimpleNav>전체 도시</SimpleNav>
      <Styled.AllCityWrap>
        <Styled.AllCityNav>
          <ul>
            {continents.map((continent) => (
              <Styled.ContinentItem
                key={continent}
                onClick={() => onClickContinent(continent)}
                $active={`${selectedContinent === continent}`}>
                {ALL_CITY[continent].name}
              </Styled.ContinentItem>
            ))}
          </ul>
        </Styled.AllCityNav>
        <Styled.AllCityContent>
          {selectedContinent && (
            <ul>
              {/* 대륙 > 국가 > 도시 순일때 */}
              {ALL_CITY[selectedContinent].countries?.map((country) => (
                <HomeCountryItem key={country.name} country={country} />
              ))}
              {/* 대한민국 > 도시 순 */}
              {ALL_CITY[selectedContinent].cities?.map((city) => (
                <HomeKoreaCities key={city.name} city={city} />
              ))}
            </ul>
          )}
        </Styled.AllCityContent>
      </Styled.AllCityWrap>
    </>
  );
}

export default HomeAllCity;
