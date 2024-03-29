import { Link } from 'react-router-dom';
import * as Styled from './TripHomeHeader.styles';
import tripLogo from '/images/tripLogo.svg';
import magnifier from '/images/magnifier.svg';

const TripHomeHeader = () => {
  return (
    <Styled.Container>
      <Styled.Title src={tripLogo} alt="TripTitleLogo" />
      <Styled.SearchButton>
        <Link to="/search/search-non">
          <img src={magnifier} alt="SearchButton" />
          &apos;직장인 여행&lsquo;을 검색해보세요
        </Link>
      </Styled.SearchButton>
    </Styled.Container>
  );
};

export default TripHomeHeader;
