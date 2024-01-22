import { useState } from 'react';
import { SimpleNav, Text } from '@/components/common';
import * as Styled from './SpotSearch.styles';
import searchGreen from '/searchGreen.svg';

const SpotSearch = () => {
  const [searchValue, setSearchValue] = useState('');

  const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <SimpleNav>장소 검색</SimpleNav>
      <Styled.SpotSearchWrapper>
        <Styled.SpotSearchBox>
          <Styled.SpotSearchInput
            type="text"
            placeholder="장소를 검색하세요"
            value={searchValue}
            onChange={onChangeSearchValue}
          />
          <img src={searchGreen} alt="검색 아이콘" />
        </Styled.SpotSearchBox>
        <Styled.RecentSearchesTitle>
          <Text fontWeight={700}>최근 검색어</Text>
        </Styled.RecentSearchesTitle>
        <Styled.RecentSearchTermBox>
          <Styled.RecentSearchTerm>
            <Text fontSize={12} fontWeight={700} color="gray">
              아룬 사원
            </Text>
          </Styled.RecentSearchTerm>
        </Styled.RecentSearchTermBox>
      </Styled.SpotSearchWrapper>
    </div>
  );
};

export default SpotSearch;
