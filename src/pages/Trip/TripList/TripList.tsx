import { SimpleNav, SubTitle, Text } from '@/components/common';
import * as Styled from './TripList.styles';
import dollar from '/images/dollar.svg';
import { CardList } from '@/components/Trip';

const TripList = () => {
  return (
    <Styled.Container>
      <SimpleNav>검색</SimpleNav>
      <Styled.MainContainer>
        <Styled.SearchButton>
          <Text color="white">‘저예산 여행’을 검색해 보세요.</Text>
        </Styled.SearchButton>
        <SubTitle margin="0 0 0.875rem 0" icon={dollar}>
          100만원으로 다녀온 인생 여행
        </SubTitle>
        <CardList />
      </Styled.MainContainer>
    </Styled.Container>
  );
};

export default TripList;
