import { useEffect, useState } from 'react';
import * as Styled from './HomeAllCity.styles';
import { SimpleNav } from '@/components/common';
import ALL_CITY from '@/constants/city';
import HomeCountryItem from './HomeCountryItem';

function HomeAllCity({ handleClose }: { handleClose: () => void }) {
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
              {ALL_CITY[selectedContinent].countries?.map((country) => (
                <HomeCountryItem key={country.name} country={country} />
              ))}
            </ul>
          )}
        </Styled.AllCityContent>
      </Styled.AllCityWrap>
      <button type="button" onClick={handleClose}>
        닫기
      </button>
    </>
  );
}

export default HomeAllCity;
