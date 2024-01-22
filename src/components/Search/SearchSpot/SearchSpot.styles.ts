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

export const SpotProfile = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.3rem 0.6rem 0.25rem 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.brand.white};
  background-color: ${({ theme }) => theme.brand.black};
  border-radius: 10px 0 4px 0;

  img {
    width: 1rem;
    height: 1rem;
    margin-right: 0.4rem;
  }
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
