import { useSearchParams } from 'react-router-dom';
import { SubTitle } from '@/components/common';
import starIcon from '/starIcon.svg';
import searchImg from '/searchImg.png';
import * as Styled from './SearchCity.styles';

const SearchCity = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  return (
    <Styled.CityContainer>
      <SubTitle fontSize={14} variant="more">
        도시
      </SubTitle>

      <Styled.CityImgWrap>
        <img src={searchImg} alt="img" />
        <Styled.ImgTitle>
          <p>치앙마이</p>
          <div>CHIANG MAI</div>
        </Styled.ImgTitle>
        <Styled.UserTitle>
          <img src={searchImg} alt="img" />
          <div>마이치앙마이</div>
        </Styled.UserTitle>
      </Styled.CityImgWrap>

      <Styled.CityTitle>
        <img src={starIcon} alt="starIcon" />
        {query}
      </Styled.CityTitle>

      <Styled.Recommend>11월 ~ 2월 사이 여행을 추천드려요.</Styled.Recommend>
      <Styled.RecommendDetail>
        비 오는 날이 적고 아침 저녁으로 선선한 날씨가 이어지며 다양한 축제가
        열리는 시기입니다. 아침 저녁으로 온화한 날씨가 연일 이어지고 러이끄라통,
        NAP, 치앙마이 꽃 축제, 갤러리나잇 등 다양한 행사가 열려 볼거리가
        풍성합니다.
      </Styled.RecommendDetail>

      <Styled.InfoContainer>
        <Styled.InfoWrap>
          <Styled.InfoWrapTitle>
            {query}
            <br />
            도시 정보
          </Styled.InfoWrapTitle>
          <Styled.InfoCityWrap>
            <Styled.CityInfo>
              <div>위치</div>
              <p>태국 북부</p>
            </Styled.CityInfo>
            <Styled.CityInfo>
              <div>언어</div>
              <p>태국어</p>
            </Styled.CityInfo>
            <Styled.CityInfo>
              <div>시차</div>
              <p>2시간 빠름</p>
            </Styled.CityInfo>
            <Styled.CityInfo>
              <div>통화</div>
              <p>바트(THB)</p>
            </Styled.CityInfo>
            <Styled.CityInfo>
              <div>전압</div>
              <p>220V</p>
            </Styled.CityInfo>
          </Styled.InfoCityWrap>
        </Styled.InfoWrap>

        <Styled.InfoWrap>
          <Styled.InfoWrapTitle>
            {query}
            <br />
            환율 정보
          </Styled.InfoWrapTitle>
          <Styled.InfoMoneyWrap>
            <p>1 THB</p>
            <div>
              KRW <br /> = 38원
            </div>
          </Styled.InfoMoneyWrap>
        </Styled.InfoWrap>
      </Styled.InfoContainer>
    </Styled.CityContainer>
  );
};

export default SearchCity;
