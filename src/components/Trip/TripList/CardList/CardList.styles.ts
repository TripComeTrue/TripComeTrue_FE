import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.9375rem;

  @media screen and (max-width: 359px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default Container;
