import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { SearchCityScrollAPI } from '@/apis/search';
import bookmarkIcon from '/bookmarkPress.svg';
import * as Styled from './SearchCity.styles';

const SearchCityScrollTitle = styled.div`
  margin: 0 1rem 1rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

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

const SearchCityScroll = () => {
  const [searchParams] = useSearchParams();
  const queryCity = searchParams.get('query');
  const navigate = useNavigate();

  const [spotData, setSpotData] = useState<TripRecordContent[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [lastPage, setLastPage] = useState(false);

  const loadMoreData = async () => {
    try {
      if (lastPage) return;

      if (!queryCity) {
        console.error('도시명이 없습니다');
        return;
      }

      const data = await SearchCityScrollAPI(queryCity, currentPage + 1);
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
        if (!queryCity) {
          console.error('도시명이 없습니다');
          return;
        }

        const data = await SearchCityScrollAPI(queryCity, 0);
        setSpotData(data.content);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [queryCity]);

  console.log(spotData);

  return (
    <>
      <SearchCityScrollTitle>
        &apos;{queryCity}&apos;가 포함된 여행 후기
      </SearchCityScrollTitle>

      <Styled.ScrollContainer>
        <Styled.ScrollWrap>
          {spotData.map((item) => (
            <>
              <Styled.ScrollExpenseWrap
                key={item.tripRecordId}
                onClick={() => navigate(`/trip/detail/${item.tripRecordId}`)}>
                <img src={item.imageUrl} alt="backgroundImg" />
                <Styled.ScrollExpensiveBookmark>
                  <img src={bookmarkIcon} alt="bookmark" />
                  {item.storedCount}
                </Styled.ScrollExpensiveBookmark>
                <Styled.ScrollExpenseTitle
                  onClick={() => navigate(`/trip/detail/${item.tripRecordId}`)}>
                  {item.tripRecordTitle}
                </Styled.ScrollExpenseTitle>
              </Styled.ScrollExpenseWrap>
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
        </Styled.ScrollWrap>
      </Styled.ScrollContainer>
    </>
  );
};

export default SearchCityScroll;
