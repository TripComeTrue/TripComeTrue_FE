import theme from '@/styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  height: 100vh;
  padding: 1.2rem;

  h1 {
    margin: 1rem 0;
    color: ${theme.text.black};
    font-size: ${theme.fontSizes.lg};
    font-weight: ${theme.fontWeights.bold};
  }
`;

export const DateContainer = styled.div`
  z-index: 0;

  .react-datepicker {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;

    width: 320px;
    padding: 0.5rem;

    font-size: ${theme.fontSizes.md};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 0.5rem;
  height: 5rem;
`;

export const Button = styled.button`
  flex-grow: 1;

  height: 3rem;
  border-radius: 0.5rem;

  font-size: ${theme.fontSizes.md};
  font-weight: ${theme.fontWeights.bold};

  cursor: pointer;
`;
