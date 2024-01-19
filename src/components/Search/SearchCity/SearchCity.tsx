import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { SubTitle } from '@/components/common';
import starIcon from '/starIcon.svg';
import searchImg from '/searchImg.png';

const CityContainer = styled.div`
  margin: 1rem;
`;

const CityTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  img {
    width: 2rem;
    margin-right: 0.3rem;
  }
`;

const CityImgWrap = styled.div`
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

const ImgTitle = styled.div`
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

const UserTitle = styled.div`
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

const Recommend = styled.div`
  margin-top: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const RecommendDetail = styled.div`
  margin-top: 0.4rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.text.gray};
`;

const InfoContainer = styled.div`
  margin-top: 1.8rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const InfoWrap = styled.div`
  padding: 0.2rem;
`;

const InfoWrapTitle = styled.div`
  text-align: left;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const InfoCityWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 3;
  margin-right: 0.2rem;
  margin-top: 0.5rem;

  background-color: ${({ theme }) => theme.brand.subBlack};
  border-radius: 0.625rem;
`;

const CityInfo = styled.div`
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

const InfoMoneyWrap = styled.div`
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

const SearchCity = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  return (
    <CityContainer>
      <SubTitle fontSize={14} variant="more">
        도시
      </SubTitle>

      <CityImgWrap>
        <img src={searchImg} alt="img" />
        <ImgTitle>
          <p>치앙마이</p>
          <div>CHIANG MAI</div>
        </ImgTitle>
        <UserTitle>
          <img src={searchImg} alt="img" />
          <div>마이치앙마이</div>
        </UserTitle>
      </CityImgWrap>

      <CityTitle>
        <img src={starIcon} alt="starIcon" />
        {query}
      </CityTitle>

      <Recommend>11월 ~ 2월 사이 여행을 추천드려요.</Recommend>
      <RecommendDetail>
        비 오는 날이 적고 아침 저녁으로 선선한 날씨가 이어지며 다양한 축제가
        열리는 시기입니다. 아침 저녁으로 온화한 날씨가 연일 이어지고 러이끄라통,
        NAP, 치앙마이 꽃 축제, 갤러리나잇 등 다양한 행사가 열려 볼거리가
        풍성합니다.
      </RecommendDetail>

      <InfoContainer>
        <InfoWrap>
          <InfoWrapTitle>
            {query}
            <br />
            도시 정보
          </InfoWrapTitle>
          <InfoCityWrap>
            <CityInfo>
              <div>위치</div>
              <p>태국 북부</p>
            </CityInfo>
            <CityInfo>
              <div>언어</div>
              <p>태국어</p>
            </CityInfo>
            <CityInfo>
              <div>시차</div>
              <p>2시간 빠름</p>
            </CityInfo>
            <CityInfo>
              <div>통화</div>
              <p>바트(THB)</p>
            </CityInfo>
            <CityInfo>
              <div>전압</div>
              <p>220V</p>
            </CityInfo>
          </InfoCityWrap>
        </InfoWrap>

        <InfoWrap>
          <InfoWrapTitle>
            {query}
            <br />
            환율 정보
          </InfoWrapTitle>
          <InfoMoneyWrap>
            <p>1 THB</p>
            <div>
              KRW <br /> = 38원
            </div>
          </InfoMoneyWrap>
        </InfoWrap>
      </InfoContainer>
    </CityContainer>
  );
};

export default SearchCity;
