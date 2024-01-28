import { useNavigate, useParams } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { IoSearchOutline } from 'react-icons/io5';
import * as Styled from './Search.styles';

const SearchTag = () => {
  const { tag } = useParams();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
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
        <Styled.TabButton $isSelected>전체</Styled.TabButton>
      </Styled.TabContainer>

      <Styled.PreparingData>데이터 준비중입니다...</Styled.PreparingData>
    </>
  );
};

export default SearchTag;
