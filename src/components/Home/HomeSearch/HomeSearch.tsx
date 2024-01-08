import logo from '/tripComeTrue.svg';
import * as Styled from './HomeSearch.styles';

const HomeSearch = () => {
  return (
    <Styled.HomeSearchWrap>
      <Styled.LogoImg>
        <img src={logo} alt="logo" />
      </Styled.LogoImg>
      <Styled.WelcomeMessage>
        <span>여행좋아</span>님,
        {/* 로그인 정보 있을 시 ㅇㅇ님, / 없을 시 안녕하세요, */}
        <br />
        오늘도 트립컴트루해요:)
      </Styled.WelcomeMessage>
      <Styled.SearchWrap>
        <Styled.SearchInput placeholder="낭만적인 프랑스 파리" />
        <Styled.SearchIcon />
      </Styled.SearchWrap>
      {/* </SearchWrap> */}
    </Styled.HomeSearchWrap>
  );
};

export default HomeSearch;
