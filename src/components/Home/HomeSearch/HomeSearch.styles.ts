import { IoIosSearch } from 'react-icons/io';
import styled from 'styled-components';

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
  font-size: ${({ theme }) => theme.fontSizes.xxl};

  span {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;

export const SearchWrap = styled.div`
  position: relative;
`;

export const SearchInput = styled.div`
  margin-top: 1.2rem;
  padding: 0.8rem;
  padding-left: 3rem;

  width: 100%;

  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: #373737;
  background-image: linear-gradient(
    90deg,
    ${(props) => props.theme.brand.primary} 20%,
    ${(props) => props.theme.brand.yellow} 80%
  );
  border-radius: 1.875rem;
  cursor: pointer;

  &:focus {
    border: none;
    outline: none;
  }
`;

export const SearchIcon = styled(IoIosSearch)`
  position: absolute;
  top: 30%;
  left: 1.3rem;

  font-size: ${({ theme }) => theme.fontSizes.xl};
  cursor: pointer;
`;
