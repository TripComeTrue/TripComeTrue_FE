import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  overflow-x: hidden;
  overflow-y: auto;

  width: 768px;
  min-height: 100vh;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export default Container;
