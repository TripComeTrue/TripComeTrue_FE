import styled from 'styled-components';

export const CountryItem = styled.li<{ $height: number }>`
  height: ${({ $height }) => `${$height}px`};
  overflow: hidden;
  transition: height 0.3s;
`;
export const CountryItemButton = styled.button<{ $active: string }>`
  position: relative;
  width: 100%;
  height: 3.25rem;
  text-align: left;
  padding: 0.6875rem 1.25rem;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: bold;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 1.25rem;
    width: calc(100% - 2.5rem);
    height: 1px;
    background-color: ${({ theme }) => theme.brand.gray};
  }
  .down-icon {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    transition: transform 0.6s;
    transform: ${({ $active }) =>
      $active === 'true' ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
`;
