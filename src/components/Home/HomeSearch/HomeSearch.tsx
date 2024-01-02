import logo from '/tripComeTrue.svg';
import {
  HomeSearchWrap,
  LogoImg,
  SearchIcon,
  SearchInput,
  SearchWrap,
  WelcomeMessage,
} from './HomeSearch.styles';

const HomeSearch = () => {
  return (
    <HomeSearchWrap>
      <LogoImg>
        <img src={logo} alt="logo" />
      </LogoImg>
      <WelcomeMessage>
        <span>여행좋아</span>님,
        {/* 로그인 정보 있을 시 ㅇㅇ님, / 없을 시 안녕하세요, */}
        <br />
        오늘도 트립컴트루해요:)
      </WelcomeMessage>
      <SearchWrap>
        <SearchInput placeholder="낭만적인 프랑스 파리" />
        <SearchIcon />
      </SearchWrap>
      {/* </SearchWrap> */}
    </HomeSearchWrap>
  );
};

export default HomeSearch;
