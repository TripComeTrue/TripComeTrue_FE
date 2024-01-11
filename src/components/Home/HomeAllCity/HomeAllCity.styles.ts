import styled from 'styled-components';

export const AllCityWrap = styled.div`
  height: 100vh;
  padding-top: 2.5rem;
  overflow: hidden;
  display: flex;
`;

export const AllCityNav = styled.nav`
  width: 44%;
  background-color: ${({ theme }) => theme.brand.lightGray};
`;
export const AllCityContent = styled.div`
  width: 56%;
`;
export const ContinentItem = styled.li<{ $active: string }>`
  height: 3.25rem;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  background-color: ${({ $active, theme }) =>
    $active === 'true' ? theme.brand.subBlack : 'transparent'};
  color: ${({ $active, theme }) =>
    $active === 'true' ? theme.brand.white : theme.text.black};
  padding: 0.6875rem 0.6875rem 0.6875rem 2.875rem;
`;
