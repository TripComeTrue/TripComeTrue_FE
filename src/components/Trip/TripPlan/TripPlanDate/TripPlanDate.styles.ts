import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  height: 100vh;
  padding: 1.2rem;
`;

export const DateContainer = styled.div`
  .react-datepicker {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;
