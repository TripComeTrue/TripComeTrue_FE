import { SubTitle } from '@/components/common';
import styled from 'styled-components';
import Img from '/domestic1.jpg';
import pingIcon from '/store.svg';

const SpotContainer = styled.div`
  margin: 1rem;
`;

const SpotWrap = styled.div`
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

const SpotGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
  aspect-ratio: 3/1.95;

  border-radius: 10px;
`;

const SpotProfile = styled.div`
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

const SpotTitle = styled.div`
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

const SearchSpot = () => {
  return (
    <SpotContainer>
      <SubTitle fontSize={14} variant="more">
        추천 여행지
      </SubTitle>
      <SpotWrap>
        <SpotGradient> </SpotGradient>
        <img src={Img} alt="img" />
        <SpotProfile>
          <img src={Img} alt="img" />
          치앙마이 한달 살이
        </SpotProfile>
        <SpotTitle>
          <p>
            <img src={pingIcon} alt="icon" />
            CHIANG MAI
          </p>
          <div>프라탓 도이수텝 사원</div>
        </SpotTitle>
      </SpotWrap>
    </SpotContainer>
  );
};

export default SearchSpot;
