import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { IoSearchOutline } from 'react-icons/io5';
import * as Styled from './Search.styles';
import { SearchNon } from '@/components/Search';

const SearchNons = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [tab, setTab] = useState('all');
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    setQuery(queryParams.get('query') || '');
    setTab(queryParams.get('tab') || 'all');
  }, [setSearchParams]);

  const handleSearch = () => {
    navigate(`/search?query=${query}&tab=${tab}`);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch();
  };

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
        <Styled.TabButton $isSelected>전체</Styled.TabButton>
        <Styled.TabButton $isSelected={false}>도시</Styled.TabButton>
        <Styled.TabButton $isSelected={false}>여행지</Styled.TabButton>
        <Styled.TabButton $isSelected={false}>크리에이터</Styled.TabButton>
      </Styled.TabContainer>

      <SearchNon />
    </>
  );
};

export default SearchNons;
