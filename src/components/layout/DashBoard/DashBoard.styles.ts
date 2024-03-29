import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;

  width: 360px;
  min-height: 100vh;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export default Container;
