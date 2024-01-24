import styled from 'styled-components';

export const CityContainer = styled.div`
  margin: 1rem 1rem 2rem 1rem;
`;

export const CityTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  img {
    width: 2rem;
    margin-right: 0.3rem;
  }
`;

export const CityImgWrap = styled.div`
  position: relative;

  margin: 0.8rem 0 0.6rem;
  width: 100%;
  aspect-ratio: 1;

  border-radius: 0.625rem;

  img {
    width: 100%;
  }

  &::after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
    aspect-ratio: 1;

    border-radius: 10px;
  }
`;

export const ImgTitle = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 0;
  right: 0;

  text-align: center;
  color: ${({ theme }) => theme.brand.white};
  z-index: 1;

  p {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    line-height: 0.9;
  }

  div {
    font-family: 'Mundial-Demibold', 'SF-Pro', sans-serif;
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;

export const UserTitle = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  padding: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5.5rem;

  border-radius: 10px 0 4px 0;
  background-color: ${({ theme }) => theme.brand.black};
  color: ${({ theme }) => theme.brand.white};
  font-size: 10px;

  img {
    margin-right: 0.2rem;
    width: 1rem;
    height: 1rem;

    border-radius: 50%;
  }
`;

export const Recommend = styled.div`
  margin-top: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const RecommendDetail = styled.div`
  margin-top: 0.4rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.text.gray};
`;

export const InfoContainer = styled.div`
  margin-top: 1.8rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const InfoWrap = styled.div`
  padding: 0.2rem;
`;

export const InfoWrapTitle = styled.div`
  text-align: left;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const InfoCityWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 3;
  margin-right: 0.2rem;
  margin-top: 0.5rem;

  background-color: ${({ theme }) => theme.brand.subBlack};
  border-radius: 0.625rem;
`;

export const CityInfo = styled.div`
  color: ${({ theme }) => theme.brand.white};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding: 0.3rem 0.5rem 0.7rem;

  div {
    font-size: 0.625rem;
    color: ${({ theme }) => theme.brand.primary};
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }

  &:first-child {
    grid-column-start: 1;
    grid-column-end: 3;
    padding: 0.8rem 0.7rem 0.5rem;

    div {
      font-size: ${({ theme }) => theme.fontSizes.xs};
    }

    p {
      font-size: ${({ theme }) => theme.fontSizes.md};
    }
  }
`;

export const InfoMoneyWrap = styled.div`
  margin-top: 0.5rem;

  padding: 1.35rem 0.7rem 1.35rem;

  background-color: ${({ theme }) => theme.brand.subBlack};
  border-radius: 0.625rem;

  color: ${({ theme }) => theme.brand.white};
  font-size: 1.625rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  p {
    color: ${({ theme }) => theme.brand.primary};
  }
`;
