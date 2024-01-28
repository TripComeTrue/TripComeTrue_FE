import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SubTitle } from '@/components/common';
import pingIcon from '/store.svg';
import spotPing from '/spotPing.png';
import spotTime from '/spotTime.svg';
import spotCall from '/spotCall.svg';
import * as Styled from './SearchSpot.styles';
import { SearchSpotInfo } from '@/apis/search';

interface SpotDataType {
  placeId: number;
  placeName: string;
  imageUrl: string;
  address: string;
  weekdayOpenTime: string;
  weekdayCloseTime: string;
  telNumber: string;
  cityName: string;
}

const SearchSpot = () => {
  const [searchParams] = useSearchParams();
  const queryCity = searchParams.get('query');
  const [spotData, setSpotData] = useState<SpotDataType | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (queryCity !== null) {
          const data = await SearchSpotInfo(queryCity);
          setSpotData(data.content);
          // content 안에 랜덤으로 1개 꺼내야하는데 데이터가 없어서 구현 미루고 있는 중...
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  console.log(spotData);

  return (
    <Styled.SpotContainer>
      <SubTitle
        fontSize={14}
        variant="more"
        onClickButton={() => navigate(`/trip/detail/${spotData?.placeId}`)}>
        추천 여행지
      </SubTitle>

      {spotData && Object.keys(spotData).length !== 0 ? (
        <div>
          <Styled.SpotWrap>
            <Styled.SpotGradient> </Styled.SpotGradient>
            <img src={spotData.imageUrl} alt="spot background-img" />

            <Styled.SpotTitle>
              <p>
                <img src={pingIcon} alt="icon" />
                {spotData.cityName}
              </p>
              <div>{spotData.placeName}</div>
            </Styled.SpotTitle>
          </Styled.SpotWrap>

          <Styled.SpotInfoWrap>
            <Styled.SpotInfos>
              <img src={spotPing} alt="img" />
              <span>주소 : </span>
              {spotData.address}
            </Styled.SpotInfos>
            <Styled.SpotInfos>
              <img src={spotTime} alt="img" />
              <span>오픈 시간 : </span>
              {spotData.weekdayOpenTime} - {spotData.weekdayCloseTime}
            </Styled.SpotInfos>
            <Styled.SpotInfos>
              <img src={spotCall} alt="img" />
              <span>전화번호 : </span>
              {spotData.telNumber}
            </Styled.SpotInfos>
          </Styled.SpotInfoWrap>
        </div>
      ) : (
        <Styled.SpotNull>
          <span>&apos;{queryCity}&apos;</span>에 대한
          <br />
          검색 결과가 없습니다.
          <p>단어의 철자를 확인 해 주세요.</p>
        </Styled.SpotNull>
      )}
    </Styled.SpotContainer>
  );
};

export default SearchSpot;
