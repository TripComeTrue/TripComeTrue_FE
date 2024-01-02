import { IoIosSearch } from 'react-icons/io';
import styled from 'styled-components';
import logo from '/tripComeTrue.png';
import theme from '@/styles/theme';

const HomeSearchWrap = styled.div`
  margin-top: 2rem;
  margin: 4rem;
`;

const LogoImg = styled.div`
  width: 18rem;

  img {
    width: 100%;
  }
`;

const WelcomeMessage = styled.div`
  margin-top: 2.5rem;
  font-size: 2.7rem;

  span {
    font-weight: ${theme.fontWeights.bold};
  }
`;

const SearchWrap = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  margin-top: 2.3rem;
  padding: 1.2rem;
  padding-left: 5rem;

  width: 100%;

  font-size: ${theme.fontSizes.xl};
  color: ${(props) => props.theme.brand.white};
  background-image: linear-gradient(
    90deg,
    ${(props) => props.theme.brand.primary} 20%,
    ${(props) => props.theme.brand.yellow} 80%
  );
  border-radius: 5rem;
  border: none;
  outline: none;

  &::placeholder {
    color: ${(props) => props.theme.brand.white};
  }
`;

const SearchIcon = styled(IoIosSearch)`
  position: absolute;
  top: 52%;
  left: 2rem;

  color: ${theme.brand.white};
  font-size: 2.1rem;
`;

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
