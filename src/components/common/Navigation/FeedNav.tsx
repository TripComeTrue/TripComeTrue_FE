import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import {
  PiBookmarkSimpleFill,
  PiBookmarkSimpleLight,
  PiCalendarBlankLight,
} from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';
import share from '@/assets/share.svg';
import backArrow from '@/assets/back-arrow.svg';
import { cancelStoreSpot, postStoreSpot } from '@/apis/detailfeed';
import * as Styled from './FeedNav.styles';
import { FeedNavProps } from './FeedNav.types';
import { NavBackBtn, NavInner, NavWrap } from './SimpleNav.styles';

function FeedNav({ children, isScheduleIcon, id, isStored }: FeedNavProps) {
  const [isBookmarked, setIsBookMarked] = useState(isStored);
  const navigate = useNavigate();
  const onClickBackBtn = () => {
    navigate(-1);
  };

  const { mutate: storeSpotMutate } = useMutation({
    mutationFn: (placeId: number) => postStoreSpot(placeId),
    onSuccess: () => setIsBookMarked(true),
  });

  const { mutate: unStoreSpotMutate } = useMutation({
    mutationFn: (placeId: number) => cancelStoreSpot(placeId),
    onSuccess: () => setIsBookMarked(false),
  });

  const onClickBookmark = () => {
    if (isBookmarked) {
      unStoreSpotMutate(id);
    } else {
      storeSpotMutate(id);
    }
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
