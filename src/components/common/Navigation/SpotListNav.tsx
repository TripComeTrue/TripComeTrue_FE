import { useNavigate } from 'react-router-dom';
import { ReactNode } from 'react';
import { NavBackBtn, NavInner, NavWrap } from './SimpleNav.styles';
import backArrow from '@/assets/back-arrow.svg';
import * as Styled from './SpotListNav.styles';
import map from '/map.svg';
import search from '/search.svg';

interface SpotListNavProps {
  children: ReactNode;
  cityId: string;
  cityName: string;
}

const SpotListNav = ({ children, cityId, cityName }: SpotListNavProps) => {
  const navigate = useNavigate();
  const onClickBackBtn = () => {
    navigate(-1);
  };

  const handleMapIconClick = () => {
    navigate(`/detailfeed/tripmap/${cityId}`);
  };

  return (
    <NavWrap>
      <NavInner>
        <Styled.SpotListNavBtnWrap>
          <NavBackBtn onClick={onClickBackBtn}>
            <img src={backArrow} alt="뒤로가기" />
          </NavBackBtn>
        </Styled.SpotListNavBtnWrap>
        <Styled.SpotNavTitle>{children}</Styled.SpotNavTitle>
        <Styled.SpotListNavRight>
          <Styled.SpotListNavIcon
            onClick={() =>
              navigate(`/detailfeed/spotsearch/${cityName}/${cityId}`)
            }>
            <img src={search} alt="검색 아이콘" />
          </Styled.SpotListNavIcon>
          <Styled.SpotListNavIcon onClick={handleMapIconClick}>
            <img src={map} alt="지도 아이콘" />
          </Styled.SpotListNavIcon>
        </Styled.SpotListNavRight>
      </NavInner>
    </NavWrap>
  );
};

export default SpotListNav;
