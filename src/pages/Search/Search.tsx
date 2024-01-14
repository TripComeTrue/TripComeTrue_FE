import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SearchResult from './SearchResult';

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
    e.preventDefault(); // 기본 제출 동작 방지
    handleSearch();
  };

  if (searchParams.get('query') === null) {
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">검색</button>
      </form>
    );
  }

  if (searchParams.has('tab') && searchParams.has('query')) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">검색</button>
        </form>
        <div>
          <button type="button" onClick={() => handleTabChange('all')}>
            전체
          </button>
          <button type="button" onClick={() => handleTabChange('city')}>
            도시
          </button>
          <button type="button" onClick={() => handleTabChange('spot')}>
            여행지
          </button>
          <button type="button" onClick={() => handleTabChange('creator')}>
            크리에이터
          </button>
        </div>

        <SearchResult tab={tab} />
      </div>
    );
  }

  return null;
};

export default Search;
