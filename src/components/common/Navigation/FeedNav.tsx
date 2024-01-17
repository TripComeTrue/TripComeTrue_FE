import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PiBookmarkSimpleFill,
  PiBookmarkSimpleLight,
  PiCalendarBlankLight,
} from 'react-icons/pi';
import { FeedNavProps } from './FeedNav.types';
import { NavBackBtn, NavInner, NavWrap } from './SimpleNav.styles';
import * as Styled from './FeedNav.styles';
import backArrow from '@/assets/back-arrow.svg';
import share from '@/assets/share.svg';

function FeedNav({ children, isScheduleIcon }: FeedNavProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const navigate = useNavigate();
  const onClickBackBtn = () => {
    navigate(-1);
  };
  const onClickBookmark = () => {
    setIsBookmarked((prev) => !prev);
  };

  return (
    <NavWrap>
      <NavInner>
        <Styled.FeedNavBtnWrap $isScheduleIcon={`${isScheduleIcon}`}>
          <NavBackBtn onClick={onClickBackBtn}>
            <img src={backArrow} alt="뒤로가기" />
          </NavBackBtn>
        </Styled.FeedNavBtnWrap>
        <Styled.FeedNavTitle $isScheduleIcon={`${isScheduleIcon}`}>
          {children}
        </Styled.FeedNavTitle>
        <Styled.FeedNavRight $isScheduleIcon={`${isScheduleIcon}`}>
          {/* 일정에 추가하는 버튼 */}
          {isScheduleIcon && (
            <Styled.FeedNavSchedule>
              <PiCalendarBlankLight />
              <Styled.Tooltip className="tooltip">
                일정에 추가하기
              </Styled.Tooltip>
            </Styled.FeedNavSchedule>
          )}
          <Styled.FeedNavBookmark
            onClick={onClickBookmark}
            $isBookmarked={`${isBookmarked}`}>
            {isBookmarked ? (
              <PiBookmarkSimpleFill />
            ) : (
              <PiBookmarkSimpleLight />
            )}
          </Styled.FeedNavBookmark>
          <Styled.FeedNavIcon>
            <img src={share} alt="공유하기" />
          </Styled.FeedNavIcon>
        </Styled.FeedNavRight>
      </NavInner>
    </NavWrap>
  );
}

export default FeedNav;
