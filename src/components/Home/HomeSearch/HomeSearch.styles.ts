import { IoIosSearch } from 'react-icons/io';
import styled from 'styled-components';
import theme from '@/styles/theme';

export const HomeSearchWrap = styled.div`
  margin: 2rem 1rem 0;
`;

export const LogoImg = styled.div`
  width: 12rem;

  img {
    width: 100%;
  }
`;

export const WelcomeMessage = styled.div`
  margin-top: 1.3rem;
  font-size: ${theme.fontSizes.xxl};

  span {
    font-weight: ${theme.fontWeights.bold};
  }
`;

export const SearchWrap = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  margin-top: 1.2rem;
  padding: 0.8rem;
  padding-left: 3rem;

  width: 100%;

  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.bold};
  color: ${(props) => props.theme.brand.white};
  background-image: linear-gradient(
    90deg,
    ${(props) => props.theme.brand.primary} 20%,
    ${(props) => props.theme.brand.yellow} 80%
  );
  border-radius: 30px;
  border: none;
  outline: none;

  &::placeholder {
    color: ${(props) => props.theme.brand.white};
  }
`;

export const SearchIcon = styled(IoIosSearch)`
  position: absolute;
  top: 50%;
  left: 1.3rem;

  color: ${theme.brand.white};
  font-size: 20px;
`;
