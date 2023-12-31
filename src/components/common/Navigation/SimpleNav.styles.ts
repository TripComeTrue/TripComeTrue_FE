import styled from 'styled-components';

export const NavWrap = styled.div`
  position: fixed;
  width: 100%;
  height: 2.5rem;
  top: 0;
  left: 0;
`;

export const NavInner = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  height: 100%;
  background-color: ${(props) => props.theme.brand.white};
  padding: 0 20px;
  display: flex;
  align-items: center;
`;

export const NavBackBtn = styled.div`
  width: 1.25rem;
  cursor: pointer;
  img {
    margin-top: 4px;
  }
`;

export const NavTitle = styled.h3`
  text-align: center;
  flex: 1;
  font-size: 1.125rem;
  font-weight: 600;
`;

export const NavRightBtns = styled.div`
  width: 1.25rem;
`;
