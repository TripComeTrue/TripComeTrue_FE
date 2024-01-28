import retry from '/RetrySearch.svg';
import * as Styled from './SearchButton.styles';

const SearchButton = ({
  handleResearchClick,
}: {
  handleResearchClick: VoidFunction;
}) => {
  // 드래그 했을 때 카테고리가 반드시 하나 설정되어있어야 표시
  return (
    <Styled.SearchButtonBox onClick={handleResearchClick}>
      <img src={retry} alt="현 지도에서 검색 버튼" />
      <span>현 지도에서 검색</span>
    </Styled.SearchButtonBox>
  );
};

export default SearchButton;
