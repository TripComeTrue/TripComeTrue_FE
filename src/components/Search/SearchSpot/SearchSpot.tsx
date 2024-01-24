import { SubTitle } from '@/components/common';
import Img from '/domestic1.jpg';
import pingIcon from '/store.svg';
import spotPing from '/spotPing.png';
import spotTime from '/spotTime.svg';
import spotCall from '/spotCall.svg';
import * as Styled from './SearchSpot.styles';

const SearchSpot = () => {
  return (
    <Styled.SpotContainer>
      <SubTitle fontSize={14} variant="more">
        추천 여행지
      </SubTitle>

      <Styled.SpotWrap>
        <Styled.SpotGradient> </Styled.SpotGradient>
        <img src={Img} alt="img" />
        <Styled.SpotProfile>
          <img src={Img} alt="img" />
          치앙마이 한달 살이
        </Styled.SpotProfile>
        <Styled.SpotTitle>
          <p>
            <img src={pingIcon} alt="icon" />
            CHIANG MAI
          </p>
          <div>프라탓 도이수텝 사원</div>
        </Styled.SpotTitle>
      </Styled.SpotWrap>

      <Styled.SpotInfoWrap>
        <Styled.SpotInfos>
          <img src={spotPing} alt="img" />
          <span>주소 : </span>
          Suthep, Mueang Chiang Mai District, Chiang Mai 50200 태국
        </Styled.SpotInfos>
        <Styled.SpotInfos>
          <img src={spotTime} alt="img" />
          <span>오픈 시간 : </span>
          6:00 - 20:00
        </Styled.SpotInfos>
        <Styled.SpotInfos>
          <img src={spotCall} alt="img" />
          <span>전화번호 : </span>
          +66-5328-5003
        </Styled.SpotInfos>
      </Styled.SpotInfoWrap>
    </Styled.SpotContainer>
  );
};

export default SearchSpot;
