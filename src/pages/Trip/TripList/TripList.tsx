import { Link, useSearchParams } from 'react-router-dom';
import { Suspense } from 'react';
import {
  RetryErrorBoundary,
  SimpleNav,
  SubTitle,
  Text,
} from '@/components/common';
import * as Styled from './TripList.styles';
import DollarIcon from '/images/dollar.svg';
import StarIcon from '/starIcon.svg';
import { CardList, CardListSkeleton } from '@/components/Trip';

const TripList = () => {
  const [searchParams] = useSearchParams();
  const queryString = searchParams.toString();
  const category = queryString.split('=')[0];

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

        <RetryErrorBoundary>
          <Suspense fallback={<CardListSkeleton />}>
            <CardList />
          </Suspense>
        </RetryErrorBoundary>
      </Styled.MainContainer>
    </Styled.Container>
  );
};

export default TripList;
