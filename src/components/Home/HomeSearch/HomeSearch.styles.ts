import { IoIosSearch } from 'react-icons/io';
import styled from 'styled-components';
import theme from '@/styles/theme';

export const HomeSearchWrap = styled.div`
  margin-top: 2rem;
  /* 이 부분 헤더 생기면 수정 예정 */
  margin: 4rem;
`;

export const LogoImg = styled.div`
  width: 18rem;

  img {
    width: 100%;
  }
`;

export const WelcomeMessage = styled.div`
  margin-top: 2.5rem;
  font-size: 2.7rem;

  span {
    font-weight: ${theme.fontWeights.bold};
  }
`;

export const SearchWrap = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
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

export const SearchIcon = styled(IoIosSearch)`
  position: absolute;
  top: 52%;
  left: 2rem;

  color: ${theme.brand.white};
  font-size: 2.1rem;
`;
