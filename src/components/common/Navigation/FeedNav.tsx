import { useMutation, useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { useState } from 'react';
import {
  PiBookmarkSimpleFill,
  PiBookmarkSimpleLight,
  PiCalendarBlankLight,
} from 'react-icons/pi';
import { useNavigate, useParams } from 'react-router-dom';
import { Alert, Snackbar } from '@mui/material';
import share from '@/assets/share.svg';
import backArrow from '@/assets/back-arrow.svg';
import {
  cancelStoreCity,
  cancelStoreSpot,
  getCityInformation,
  postStoreCity,
  postStoreSpot,
} from '@/apis/detailfeed';
import * as Styled from './FeedNav.styles';
import { NavBackBtn, NavInner, NavWrap } from './SimpleNav.styles';
import useModal from '@/hooks/common/useModal';
import useKakaoShare from '@/hooks/common/useKakaoShare';
import { copyClipboard } from '@/utils/copyClipboard';
import { SelectModal, Share } from '..';
import { ShareKakaoIcon, ShareLinkIcon } from '../Share/Share.styles';
import { getSpotInformation } from '@/apis/spotfeed';
import { getCookie } from '@/utils/cookie';

const FeedNav = ({
  feedType,
  isScheduleIcon,
}: {
  feedType?: 'spot';
  isScheduleIcon?: boolean;
}) => {
  const isLogin = getCookie('accessToken');
  const { id } = useParams() as { id: string };
  const pageType = feedType ? 'spot' : 'city';
  const [success, setSuccess] = useState(false); // 링크 클립보드 복사 성공 여부
  const { open, handleOpen, handleClose } = useModal(); // 공유모달 열림 여부
  const navigate = useNavigate();
  const onClickBackBtn = () => {
    navigate(-1);
  };

  const { data: navInfo, refetch } = useSuspenseQuery<
    SpotInfoDataType | CityInfoDataType
  >({
    queryKey: ['pageName', id],
    queryFn: () => (feedType ? getSpotInformation(id) : getCityInformation(id)),
  });

  const name = navInfo?.name;
  const isBookmarked = navInfo?.isStored;

  const { mutate: storeSpotMutate } = useMutation({
    mutationFn: () => postStoreSpot(id),
    onSuccess: () => refetch(),
  });

  const { mutate: unStoreSpotMutate } = useMutation({
    mutationFn: () => cancelStoreSpot(id),
    onSuccess: () => refetch(),
  });

  const { mutate: storeCityMutate } = useMutation({
    mutationFn: () => postStoreCity(id),
    onSuccess: () => refetch(),
  });

  const { mutate: unStoreCityMutate } = useMutation({
    mutationFn: () => cancelStoreCity(id),
    onSuccess: () => refetch(),
  });

  const onClickCityBookMark = () => {
    if (isBookmarked) {
      unStoreCityMutate();
    } else {
      storeCityMutate();
    }
  };
  const onClickSpotBookMark = () => {
    if (isBookmarked) {
      unStoreSpotMutate();
    } else {
      storeSpotMutate();
    }
  };

  // 카카오톡 공유
  const { handleKakaoShare } = useKakaoShare({
    title: `${name}여행 공유하기`,
    desc: '다양한 여행 컨텐츠를 즐겨보세요!',
    link: `detailfeed/${pageType}/${id}`,
  });

  // 카톡 공유 클릭시 함수
  const onClickKakaoShare = () => {
    handleClose();
    handleKakaoShare();
  };

  // 링크 복사 버튼 클릭시 함수
  const onClickLinkCopy = () => {
    const BASE_URL = 'https://tripcometrue.vercel.app/';
    if (id) {
      copyClipboard(`${BASE_URL}detailfeed/${pageType}/${id}`);
    }
    handleClose();
    setSuccess(true);
  };
  const onClickAlertClose = () => {
    setSuccess(false);
  };

  return (
    <>
      <NavWrap>
        <NavInner>
          <Styled.FeedNavBtnWrap $isScheduleIcon={`${isScheduleIcon}`}>
            <NavBackBtn onClick={onClickBackBtn}>
              <img src={backArrow} alt="뒤로가기" />
            </NavBackBtn>
          </Styled.FeedNavBtnWrap>
          <Styled.FeedNavTitle $isScheduleIcon={`${isScheduleIcon}`}>
            {name}
          </Styled.FeedNavTitle>
          <Styled.FeedNavRight $isScheduleIcon={`${isScheduleIcon}`}>
            {isScheduleIcon && isLogin && (
              <Styled.FeedNavSchedule
                onClick={() => navigate('/trip/tripplan')}>
                <PiCalendarBlankLight />
                <Styled.Tooltip className="tooltip">
                  일정에 추가하기
                </Styled.Tooltip>
              </Styled.FeedNavSchedule>
            )}
            {isLogin && (
              <Styled.FeedNavBookmark
                onClick={feedType ? onClickSpotBookMark : onClickCityBookMark}
                $isBookmarked={`${isBookmarked}`}>
                {isBookmarked ? (
                  <PiBookmarkSimpleFill />
                ) : (
                  <PiBookmarkSimpleLight />
                )}
              </Styled.FeedNavBookmark>
            )}
            <Styled.FeedNavIcon onClick={handleOpen}>
              <img src={share} alt="공유하기" />
            </Styled.FeedNavIcon>
          </Styled.FeedNavRight>
        </NavInner>
      </NavWrap>
      {/* 공유 모달 */}
      <SelectModal open={open} onClose={handleClose} title="공유하기">
        <Share icon={<ShareKakaoIcon />} onClickShare={onClickKakaoShare}>
          카카오톡으로 공유하기
        </Share>
        <Share icon={<ShareLinkIcon />} onClickShare={onClickLinkCopy}>
          링크 복사하기
        </Share>
      </SelectModal>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={success}
        autoHideDuration={5000}
        onClose={onClickAlertClose}>
        <Alert
          onClose={onClickAlertClose}
          severity="success"
          sx={{ width: '100%' }}>
          클립보드에 복사되었습니다!
        </Alert>
      </Snackbar>
    </>
  );
};

export default FeedNav;
