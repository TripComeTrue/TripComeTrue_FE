import React, { ButtonHTMLAttributes, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { IoSearchOutline } from 'react-icons/io5';
import styled from 'styled-components';
import SearchResult from './SearchResult';

interface TabButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected: boolean;
}

const SearchTop = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 0.9fr 1.1fr;

  padding: 0.56rem 1.25rem 0.56rem 1rem;

  font-size: ${({ theme }) => theme.fontSizes.md};
`;

const SearchForm = styled.form`
  position: relative;
  margin: 1rem;

  button {
    position: absolute;
    top: 15%;
    right: 1.2rem;
    color: ${({ theme }) => theme.brand.primary};
  }
`;

const SearchInput = styled.input`
  padding: 0.6rem 3rem 0.6rem 1.5rem;
  width: 100%;

  box-sizing: border-box;
  background-color: #2f2f2f;
  border-radius: 1.875rem;
  text-decoration: none;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.brand.white};
  font-size: ${({ theme }) => theme.fontSizes.sm};

  &:focus {
    border: none;
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.brand.white};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

const TabContainer = styled.div`
  margin: 0 1rem 1rem;
  display: flex;
  justify-content: flex-start;
`;

const TabButton = styled.button<TabButtonProps>`
  position: relative;
  padding: 0.5rem 0.7rem;
  border: none;
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'normal')};
  color: ${({ isSelected }) => (isSelected ? '#373737' : '#626262')};

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    height: 0.125rem;
    background-color: ${({ theme }) => theme.brand.primary};
    transition:
      width 0.3s,
      transform 0.3s;
    transform: translateX(-50%);
    width: ${({ isSelected }) => (isSelected ? '80%' : '0')};
  }
`;

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

  if (searchParams.get('query') === null) {
    return (
      <>
        <SearchTop>
          <IoIosArrowBack style={{ fontSize: 20, marginRight: 8 }} />
          검색
        </SearchTop>
        <SearchForm onSubmit={handleSubmit}>
          <SearchInput
            type="text"
            name="query"
            value={query}
            placeholder="도시, 여행지, 크리에이터 검색하기"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" aria-label="검색">
            <IoSearchOutline />
          </button>
        </SearchForm>
      </>
    );
  }

  if (searchParams.has('tab') && searchParams.has('query')) {
    return (
      <>
        <SearchTop>
          <IoIosArrowBack style={{ fontSize: 20, marginRight: 8 }} />
          검색
        </SearchTop>
        <SearchForm onSubmit={handleSubmit}>
          <SearchInput
            type="text"
            name="query"
            value={query}
            placeholder="도시, 여행지, 크리에이터 검색하기"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" aria-label="검색">
            <IoSearchOutline />
          </button>
        </SearchForm>

        <TabContainer>
          <TabButton
            isSelected={tab === 'all'}
            onClick={() => handleTabChange('all')}>
            전체
          </TabButton>
          <TabButton
            isSelected={tab === 'city'}
            onClick={() => handleTabChange('city')}>
            도시
          </TabButton>
          <TabButton
            isSelected={tab === 'spot'}
            onClick={() => handleTabChange('spot')}>
            여행지
          </TabButton>
          <TabButton
            isSelected={tab === 'creator'}
            onClick={() => handleTabChange('creator')}>
            크리에이터
          </TabButton>
        </TabContainer>

        <SearchResult tab={tab} />
      </>
    );
  }

  return null;
};

export default Search;
