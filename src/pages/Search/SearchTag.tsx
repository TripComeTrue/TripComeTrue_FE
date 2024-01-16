import { useNavigate, useParams } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { IoSearchOutline } from 'react-icons/io5';
import * as Styled from './Search.styles';

const SearchTag = () => {
  const { tag } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <Styled.SearchTop>
        <IoIosArrowBack style={{ fontSize: 20, marginRight: 8 }} />
        검색
      </Styled.SearchTop>
      <Styled.SearchForm>
        <Styled.SearchInput
          type="text"
          name="tag"
          value={tag}
          onClick={() => navigate('/search')}
        />
        <button type="submit" aria-label="검색">
          <IoSearchOutline />
        </button>
      </Styled.SearchForm>

      <Styled.TabContainer>
        <Styled.TabButton isSelected>전체</Styled.TabButton>
        <Styled.TabButton isSelected={false}>도시</Styled.TabButton>
        <Styled.TabButton isSelected={false}>여행지</Styled.TabButton>
        <Styled.TabButton isSelected={false}>크리에이터</Styled.TabButton>
      </Styled.TabContainer>

      {tag}
    </>
  );
};

export default SearchTag;