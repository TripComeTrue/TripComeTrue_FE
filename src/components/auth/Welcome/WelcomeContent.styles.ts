import styled from 'styled-components';

export const WelcomeContentWrap = styled.div`
  text-align: center;
  p {
    margin: 1rem 0 0.75rem;
  }
  img {
    width: 16.6875rem;
  }
  margin-bottom: 1.75rem;
`;

export const WelcomeLogo = styled.h1`
  font-family:
    'Mundial-Demibold',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: 2rem;
  img {
    width: 8rem;
    vertical-align: -0.4375rem;
  }
`;
