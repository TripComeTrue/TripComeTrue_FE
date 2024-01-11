import { useEffect, useState } from 'react';
import * as Styled from './HomeAllCity.styles';
import { SimpleNav } from '@/components/common';
import ALL_CITY from '@/constants/city';

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

  return (
    <>
      <SimpleNav>전체 도시</SimpleNav>
      <Styled.AllCityWrap>
        <Styled.AllCityNav>
          <ul>
            {Object.keys(ALL_CITY).map((continent) => (
              <Styled.ContinentItem
                key={continent}
                onClick={() => onClickContinent(continent)}
                $active={`${selectedContinent === continent}`}>
                {ALL_CITY[continent].name}
              </Styled.ContinentItem>
            ))}
          </ul>
        </Styled.AllCityNav>
        <Styled.AllCityContent>content</Styled.AllCityContent>
      </Styled.AllCityWrap>
      <button type="button" onClick={handleClose}>
        닫기
      </button>
    </>
  );
}

export default HomeAllCity;
