import { useEffect, useState } from 'react';
import PlaceIcon from '@mui/icons-material/Place';
import { IoCloseCircle } from 'react-icons/io5';
import { Button, SimpleNav, SubTitle } from '@/components/common';
import TripPlanGoogleMaps from '../../TripPlanPostingPlan/TripPlanGoogleMaps/TripPlanGoogleMaps';
import * as Styled from './TripPlanAddPlace.styles';

const TripPlanAddPlace = () => {
  const [placeName, setPlaceName] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [lat, setLat] = useState<number>();
  const [lng, setLng] = useState<number>();

  useEffect(() => {
    setIsDisabled(!placeName);
  }, [placeName]);

  const handlePlaceNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlaceName(e.target.value);
  };

  // 임시 테스트용
  const handleLatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setLat(value);
  };

  const handleLngChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setLng(value);
  };

  return (
    <>
      <SimpleNav>1일차 장소 추가하기</SimpleNav>
      <Styled.Wrapper>
        <TripPlanGoogleMaps
          height="23rem"
          placeName={placeName}
          lat={lat}
          lng={lng}
        />

        <Styled.ToolTip>
          <PlaceIcon
            className="city-icon"
            fontSize="small"
            style={{ fill: '#b4f34c' }}
          />
          지도 위에서 방문 장소를 확인해보세요
        </Styled.ToolTip>

        <input
          className="lat"
          type="number"
          value={lat}
          onChange={handleLatChange}
          placeholder="위도 입력"
        />
        <input
          className="lng"
          type="number"
          value={lng}
          onChange={handleLngChange}
          placeholder="경도 입력"
        />
        <form>
          <Styled.AddressInputContainer>
            <SubTitle fontSize={14}>주소</SubTitle>
            <Styled.InputBox
              className="address"
              placeholder="주소를 입력해주세요(필수)"
            />
            <Styled.AddressInputClearBtn>
              <IoCloseCircle />
            </Styled.AddressInputClearBtn>
          </Styled.AddressInputContainer>

          <Styled.PlaceInputContainer>
            <SubTitle fontSize={14}>장소</SubTitle>
            <Styled.InputBox
              className="placeName"
              value={placeName}
              onChange={handlePlaceNameChange}
              placeholder="장소명을 입력해주세요(필수)"
            />
            <Styled.PlaceInputClearBtn>
              <IoCloseCircle />
            </Styled.PlaceInputClearBtn>
          </Styled.PlaceInputContainer>

          <Styled.TripPlanBtnWrap>
            <Button size="lg" variants="gray">
              이전
            </Button>
            <Button
              type="submit"
              size="lg"
              variants="primary"
              disabled={isDisabled}>
              완료
            </Button>
          </Styled.TripPlanBtnWrap>
        </form>
      </Styled.Wrapper>
    </>
  );
};

export default TripPlanAddPlace;
