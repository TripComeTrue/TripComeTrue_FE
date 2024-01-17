import styled from 'styled-components';
import { TabButtonProps } from './Search.types';

export const SearchTop = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 0.9fr 1.1fr;

  padding: 0.56rem 1.25rem 0.56rem 1rem;

  font-size: ${({ theme }) => theme.fontSizes.md};

  svg {
    cursor: pointer;
  }
`;

export const SearchForm = styled.form`
  position: relative;
  margin: 1rem;

  cursor: pointer;

  button {
    position: absolute;
    top: 20%;
    right: 1.2rem;
    color: ${({ theme }) => theme.brand.primary};
  }
`;

export const SearchInput = styled.input`
  padding: 0.6rem 3rem 0.6rem 1.5rem;
  width: 100%;

  box-sizing: border-box;
  background-color: #2f2f2f;
  border-radius: 1.875rem;
  text-decoration: none;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.brand.white};
  font-size: ${({ theme }) => theme.fontSizes.sm};

  &:focus {
    border: none;
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.brand.white};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export const TabContainer = styled.div`
  margin: 0 1rem 1rem;
  display: flex;
  justify-content: flex-start;
`;

export const TabButton = styled.button<TabButtonProps>`
  position: relative;
  padding: 0.5rem 0.7rem;
  border: none;
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'normal')};
  color: ${({ isSelected }) => (isSelected ? '#373737' : '#626262')};

  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    height: 0.125rem;
    background-color: ${({ theme }) => theme.brand.primary};
    transition:
      width 0.3s,
      transform 0.3s;
    transform: translateX(-50%);
    width: ${({ isSelected }) => (isSelected ? '80%' : '0')};
  }
`;

export const TagContainer = styled.div`
  margin: 1rem;
`;

export const TagTitle = styled.div`
  margin-bottom: 1rem;

  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;
