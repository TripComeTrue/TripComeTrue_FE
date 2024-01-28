import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoSearchOutline } from 'react-icons/io5';
import * as Styled from './Search.styles';
import { SearchExpenseRanges } from '@/apis/search';
import bookmarkIcon from '/bookmarkPress.svg';

interface TripRecordContent {
  tripRecordId: number;
  tripRecordTitle: string;
  memberId: number;
  memberName: string;
  profileImageUrl: string;
  totalDays: number;
  averageRating: number;
  storedCount: number;
  imageUrl: string;
}

const SearchTagExpense = () => {
  const { tag } = useParams();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const [spotData, setSpotData] = useState<TripRecordContent[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [lastPage, setLastPage] = useState(false);

  const loadMoreData = async () => {
    try {
      if (lastPage) return;

      let expenseRange = '';

      if (tag === '50만원 이하') {
        expenseRange = 'BELOW_50';
      } else if (tag === '50~100만원') {
        expenseRange = 'BELOW_100';
      } else if (tag === '100~200만원') {
        expenseRange = 'BELOW_200';
      } else if (tag === '200~300만원') {
        expenseRange = 'BELOW_300';
      } else if (tag === '300만원 이상') {
        expenseRange = 'ABOVE_300';
      }

      const data = await SearchExpenseRanges(expenseRange, currentPage + 1);
      const newData = data.content;

      if (newData.length === 0) {
        setLastPage(true);
        return;
      }

      setSpotData((prevData) => [...prevData, ...newData]);
      setCurrentPage(data.currentPageNum);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let expenseRange: string = '';

        if (tag === '50만원 이하') {
          expenseRange = 'BELOW_50';
        } else if (tag === '50~100만원') {
          expenseRange = 'BELOW_100';
        } else if (tag === '100~200만원') {
          expenseRange = 'BELOW_200';
        } else if (tag === '200~300만원') {
          expenseRange = 'BELOW_300';
        } else if (tag === '300만원 이상') {
          expenseRange = 'ABOVE_300';
        }

        const data = await SearchExpenseRanges(expenseRange, 0);
        setSpotData(data.content);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [tag]);

  console.log(tag);
  console.log(spotData);

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
        <Styled.TagWrap>
          {spotData.map((item) => (
            <>
              <Styled.TagExpenseWrap
                key={item.tripRecordId}
                onClick={() => navigate(`/trip/detail/${item.tripRecordId}`)}>
                <img src={item.imageUrl} alt="backgroundImg" />
                <Styled.TagExpensiveBookmark>
                  <img src={bookmarkIcon} alt="bookmark" />
                  {item.storedCount}
                </Styled.TagExpensiveBookmark>
                <Styled.TagExpenseTitle
                  onClick={() => navigate(`/trip/detail/${item.tripRecordId}`)}>
                  {item.tripRecordTitle}
                </Styled.TagExpenseTitle>
              </Styled.TagExpenseWrap>
            </>
          ))}
          {lastPage ? (
            <>
              <Styled.MoreLoading>정보가 없습니다.</Styled.MoreLoading>
            </>
          ) : (
            <Styled.MoreInfo type="button" onClick={loadMoreData}>
              더 불러오기
            </Styled.MoreInfo>
          )}
        </Styled.TagWrap>
      </Styled.TagContainer>
    </>
  );
};

export default SearchTagExpense;
