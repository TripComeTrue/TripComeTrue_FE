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
        <Styled.TabButton isSelected>전체</Styled.TabButton>
        <Styled.TabButton isSelected={false}>도시</Styled.TabButton>
        <Styled.TabButton isSelected={false}>여행지</Styled.TabButton>
        <Styled.TabButton isSelected={false}>크리에이터</Styled.TabButton>
      </Styled.TabContainer>

      <Styled.TagContainer>
        <Styled.TagTitle>&apos;{tag}&apos; 여행 후기</Styled.TagTitle>
        <div>무한 스크롤</div>
      </Styled.TagContainer>
    </>
  );
};

export default SearchTag;
