import styled from 'styled-components';

export const SpotContainer = styled.div`
  margin: 1rem 1rem 2rem 1rem;
`;

export const SpotWrap = styled.div`
  margin-top: 1rem;
  position: relative;

  img {
    width: 100%;
    height: 100%;

    aspect-ratio: 3/1.95;

    object-fit: cover;
    overflow: hidden;
    border-radius: 0.625rem;
  }
`;

export const SpotGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
  aspect-ratio: 3/1.95;

  border-radius: 10px;
`;

export const SpotTitle = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 1rem;

  display: flex;
  flex-direction: column;
  align-items: start;

  color: ${({ theme }) => theme.brand.white};

  p {
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Mundial-Demibold', 'SF-Pro', sans-serif;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.bold};

    img {
      margin-right: 0.2rem;
      width: 1rem;
      height: 1.2rem;
    }
  }

  div {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;

export const SpotInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const SpotInfos = styled.div`
  margin-bottom: 0.2rem;
  display: flex;
  align-items: center;

  font-size: 10px;

  img {
    margin-right: 0.35rem;
    width: 0.5rem;
  }

  span {
    margin-right: 0.2rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;

export const SpotNull = styled.div`
  margin: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.text.gray};

  span {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }

  p {
    margin-top: 0.5rem;
    font-size: 10px;
  }
`;

export const ScrollContainer = styled.div`
  margin: 1rem;
`;

export const ScrollWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ScrollTitle = styled.div`
  margin-bottom: 1rem;

  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const ScrollExpenseWrap = styled.div`
  margin: 0.2rem;
  position: relative;
  margin-bottom: 3rem;

  width: 9.4rem;
  height: 9.4rem;
  border-radius: 0.625rem;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;

    background-size: cover;
    background-position: center;
    border-radius: 0.625rem;
  }
`;

export const ScrollExpensiveBookmark = styled.div`
  position: absolute;
  top: 0.4rem;
  left: 0.5rem;

  display: flex;

  font-size: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.brand.white};

  img {
    width: 1rem;
  }
`;

export const ScrollExpenseTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const MoreLoading = styled.button`
  width: 100%;
  height: 4rem;
  color: ${({ theme }) => theme.text.gray};
`;

export const MoreInfo = styled.button`
  width: 100%;
  height: 4rem;

  color: ${({ theme }) => theme.text.gray};
  text-align: center;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
