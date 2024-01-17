import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { IoSearchOutline } from 'react-icons/io5';
import * as Styled from './Search.styles';
import SearchAll from './SearchAll';
import SearchCity from './SearchCity';
import SearchSpot from './SearchSpot';
import SearchCreator from './SearchCreator';
import { SearchKeyword } from '@/components/Search';

const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  const [tab, setTab] = useState('all');
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    setQuery(queryParams.get('query') || '');
    setTab(queryParams.get('tab') || 'all');
  }, [setQuery, setTab]);

  const handleSearch = () => {
    setSearchParams({ query, tab });
    navigate(`/search?query=${query}&tab=${tab}`);
  };

  const handleTabChange = (selectedTab: string) => {
    setTab(selectedTab);
    setSearchParams({ query, tab: selectedTab });
    navigate(`/search?query=${query}&tab=${selectedTab}`);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch();
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  let SearchResult: JSX.Element | null = null;
  switch (tab) {
    case 'all':
      SearchResult = <SearchAll />;
      break;
    case 'city':
      SearchResult = <SearchCity />;
      break;
    case 'spot':
      SearchResult = <SearchSpot />;
      break;
    case 'creator':
      SearchResult = <SearchCreator />;
      break;
    case null:
      SearchResult = <div> </div>;
      break;
    default:
      break;
  }

  if (searchParams.get('query') === null) {
    return (
      <>
        <Styled.SearchTop>
          <IoIosArrowBack
            onClick={handleGoBack}
            style={{ fontSize: 20, marginRight: 8 }}
          />
          검색
        </Styled.SearchTop>
        <Styled.SearchForm onSubmit={handleSubmit}>
          <Styled.SearchInput
            type="text"
            name="query"
            value={query}
            placeholder="도시, 여행지, 크리에이터 검색하기"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" aria-label="검색">
            <IoSearchOutline />
          </button>
        </Styled.SearchForm>
        <SearchKeyword />
      </>
    );
  }

  if (searchParams.has('tab') && searchParams.has('query')) {
    return (
      <>
        <Styled.SearchTop>
          <IoIosArrowBack
            onClick={handleGoBack}
            style={{ fontSize: 20, marginRight: 8 }}
          />
          검색
        </Styled.SearchTop>
        <Styled.SearchForm onSubmit={handleSubmit}>
          <Styled.SearchInput
            type="text"
            name="query"
            value={query}
            placeholder="도시, 여행지, 크리에이터 검색하기"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" aria-label="검색">
            <IoSearchOutline />
          </button>
        </Styled.SearchForm>

        <Styled.TabContainer>
          <Styled.TabButton
            isSelected={tab === 'all'}
            onClick={() => handleTabChange('all')}>
            전체
          </Styled.TabButton>
          <Styled.TabButton
            isSelected={tab === 'city'}
            onClick={() => handleTabChange('city')}>
            도시
          </Styled.TabButton>
          <Styled.TabButton
            isSelected={tab === 'spot'}
            onClick={() => handleTabChange('spot')}>
            여행지
          </Styled.TabButton>
          <Styled.TabButton
            isSelected={tab === 'creator'}
            onClick={() => handleTabChange('creator')}>
            크리에이터
          </Styled.TabButton>
        </Styled.TabContainer>

        {SearchResult}
      </>
    );
  }

  return null;
};

export default Search;
