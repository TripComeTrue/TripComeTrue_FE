import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { SubTitle } from '@/components/common';
import starIcon from '/starIcon.svg';
import * as Styled from './SearchCity.styles';
import { SearchCityInfo } from '@/apis/search';

interface CityDataType {
  cityId: number;
  name: string;
  language: string;
  timeDifference: string;
  voltage: string;
  visa?: string;
  curUnit: string;
  exchangeRate: string;
  weatherRecommendation: string;
  weatherDescription: string;
  country: string;
  imageUrl: string;
}

const SearchCity = () => {
  const [searchParams] = useSearchParams();
  const queryCity = searchParams.get('query');
  const [cityData, setCityData] = useState<CityDataType | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (queryCity !== null) {
          const data = await SearchCityInfo(queryCity);
          setCityData(data[0]);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [queryCity]);

  const ExchangeRate = (value: string): string | null => {
    const matchResult = value.match(/1:(\d+(\.\d+)?)/);

    return matchResult ? matchResult[1] : null;
  };

  return (
    <Styled.CityContainer>
      <SubTitle
        fontSize={14}
        variant="more"
        onClickButton={() =>
          navigate(`/detailfeed/city/${cityData?.cityId}`, {
            state: { cityId: cityData?.cityId, name: cityData?.name },
          })
        }>
        도시
      </SubTitle>

      {cityData && Object.keys(cityData).length !== 0 ? (
        <div>
          <Styled.CityImgWrap>
            <img src={cityData.imageUrl} alt="cityImg" />
            <Styled.ImgTitle>
              <p>{cityData.country}</p>
              <div>{cityData.country}</div>
            </Styled.ImgTitle>
          </Styled.CityImgWrap>

          <Styled.CityTitle>
            <img src={starIcon} alt="starIcon" />
            {queryCity}
          </Styled.CityTitle>

          <Styled.Recommend>{cityData.weatherRecommendation}</Styled.Recommend>
          <Styled.RecommendDetail>
            {cityData.weatherDescription}
          </Styled.RecommendDetail>

          <Styled.InfoContainer>
            <Styled.InfoWrap>
              <Styled.InfoWrapTitle>
                {queryCity}
                <br />
                도시 정보
              </Styled.InfoWrapTitle>
              <Styled.InfoCityWrap>
                <Styled.CityInfo>
                  <div>위치</div>
                  <p>{cityData.country}</p>
                </Styled.CityInfo>
                <Styled.CityInfo>
                  <div>언어</div>
                  <p>{cityData.language}</p>
                </Styled.CityInfo>
                <Styled.CityInfo>
                  <div>시차</div>
                  <p>{cityData.timeDifference}</p>
                </Styled.CityInfo>
                <Styled.CityInfo>
                  <div>통화</div>
                  <p>{cityData.curUnit}</p>
                </Styled.CityInfo>
                <Styled.CityInfo>
                  <div>전압</div>
                  <p>{cityData.voltage}</p>
                </Styled.CityInfo>
              </Styled.InfoCityWrap>
            </Styled.InfoWrap>

            <Styled.InfoWrap>
              <Styled.InfoWrapTitle>
                {queryCity}
                <br />
                환율 정보
              </Styled.InfoWrapTitle>
              <Styled.InfoMoneyWrap>
                <p>1 원</p>
                <div>
                  = {ExchangeRate('1:9.786')}
                  <br />
                  {cityData.curUnit}
                </div>
              </Styled.InfoMoneyWrap>
            </Styled.InfoWrap>
          </Styled.InfoContainer>
        </div>
      ) : (
        <Styled.CityNull>
          {' '}
          <span>&apos;{queryCity}&apos;</span>에 대한
          <br />
          검색 결과가 없습니다.
          <p>단어의 철자를 확인 해 주세요.</p>
        </Styled.CityNull>
      )}
    </Styled.CityContainer>
  );
};

export default SearchCity;
