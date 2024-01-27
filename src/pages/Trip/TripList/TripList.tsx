import { useQuery } from '@tanstack/react-query';
import { Link, useSearchParams } from 'react-router-dom';
import { SimpleNav, SubTitle, Text } from '@/components/common';
import * as Styled from './TripList.styles';
import DollarIcon from '/images/dollar.svg';
import StarIcon from '/starIcon.svg';
import { CardList } from '@/components/Trip';
import { getTripRecords } from '@/apis/trip-records';
import CardListSkeleton from '@/components/Trip/TripList/CardList/CardListSkeleton';

const TripList = () => {
  const [searchParams] = useSearchParams();
  const queryString = searchParams.toString();
  const category = queryString.split('=')[0];

  const { data: tripRecordsData } = useQuery({
    queryKey: ['TripRecordsData'],
    queryFn: () => getTripRecords(queryString),
  });

  return (
    <Styled.Container>
      <SimpleNav>검색</SimpleNav>
      <Styled.MainContainer>
        <Link to="/search/search-non">
          <Styled.SearchButton>
            <Text color="white">‘저예산 여행’을 검색해 보세요.</Text>
          </Styled.SearchButton>
        </Link>
        {category === 'expenseRangeType' ? (
          <SubTitle margin="0 0 0.875rem 0" icon={DollarIcon}>
            100만원으로 다녀온 인생 여행
          </SubTitle>
        ) : (
          <SubTitle margin="0 0 0.875rem 0" icon={StarIcon}>
            1박 2일 여행 일정
          </SubTitle>
        )}

        {tripRecordsData ? (
          <CardList tripRecordsData={tripRecordsData} />
        ) : (
          <CardListSkeleton />
        )}
      </Styled.MainContainer>
    </Styled.Container>
  );
};

export default TripList;
