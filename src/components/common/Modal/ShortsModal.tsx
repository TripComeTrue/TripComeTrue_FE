import { useEffect, useRef, useState } from 'react';
import { Modal } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import YouTube, { YouTubePlayer, YouTubeProps } from 'react-youtube';
import { IoVolumeMediumSharp, IoVolumeMuteSharp } from 'react-icons/io5';
import { ShortsModalProps } from './ShortsModal.types';
import * as Styled from './ShortsModal.styles';
import history from './ShortsModal.utils';
import { Avatar, Text } from '..';
import mark from '/mark.svg';
import ShortsNav from '../Navigation/ShortsNav';

/**
 * 쇼츠 영상 재생 모달을 생성하는 컴포넌트 입니다.
 * @param open 열림 / 닫힘 여부를 전달합니다.
 * @param onClose 닫혔을때 실행할 함수를 전달합니다.
 * @param videoId `optional` 영상 재생id를 전달합니다.
 * @returns 쇼츠 영상 재생 모달 컴포넌트를 반환 합니다.
 */
const ShortsModal = ({
  open,
  onClose,
  videoId,
  tripRecordTitle,
  memberName,
  profileImageUrl,
  memberId,
  tripRecordId,
}: ShortsModalProps) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(true);
  const player = useRef<YouTubePlayer>(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const opts: YouTubeProps['opts'] = {
    playerVars: {
      controls: 0,
      // 자동 재생
      autoplay: 1,
      autohide: 1,
      mute: 1,
      playsinline: 1,
      modestbranding: 1,
      // 관련 동영상 표시 여부
      rel: 0,
      playlist: videoId,
    },
  };

  const onYoutubeReady: YouTubeProps['onReady'] = (event) => {
    player.current = event.target;
  };

  const onYoutubeEnd: YouTubeProps['onEnd'] = (event) => {
    player.current = event.target;
    player.current.stopVideo(0);
  };

  const onClickBox = () => {
    if (isPaused) {
      player.current?.pauseVideo();
    } else {
      player.current?.playVideo();
    }
    setIsPaused(!isPaused);
  };

  const onClickToggleMute = () => {
    if (isMuted) {
      player.current?.unMute();
    } else {
      player.current?.mute();
    }
    setIsMuted((prev) => !prev);
  };

  const handleMemberNameClick = () => {
    onClose();
    navigate(`/creator/${memberId}`, { state: memberId });
  };

  const handleShortsTitleClick = () => {
    onClose();
    navigate(`/trip/detail/${tripRecordId}`);
  };

  useEffect(() => {
    const unlisten = history.listen(({ action }) => {
      if (action === 'POP') {
        onClose();
        navigate(pathname);
      }
    });

    return unlisten;
  }, [history]);

  return (
    <Modal open={open} onClose={onClose} sx={{ zIndex: 100 }}>
      <Styled.ShortsModalBox>
        <ShortsNav onClickBackBtn={onClose}>Shorts</ShortsNav>
        <Styled.ShortsModalInner>
          <YouTube
            videoId={videoId}
            opts={opts}
            onReady={onYoutubeReady}
            onEnd={onYoutubeEnd}
            className="youtube-api"
          />
          <Styled.ShortsModalDescBox onClick={onClickBox}>
            <Styled.ShortsModalProfile onClick={handleMemberNameClick}>
              <Avatar size={32} src={profileImageUrl} />
              <Text color="white">{memberName}</Text>
              <img src={mark} alt="유저 마크" />
            </Styled.ShortsModalProfile>
            <Styled.ShortsModalTitle as="h3" onClick={handleShortsTitleClick}>
              {tripRecordTitle}
            </Styled.ShortsModalTitle>
            <Styled.ShortsModalToggleMuteBtn
              className="player-mute-btn"
              onClick={onClickToggleMute}>
              {isMuted ? <IoVolumeMuteSharp /> : <IoVolumeMediumSharp />}
            </Styled.ShortsModalToggleMuteBtn>
          </Styled.ShortsModalDescBox>
        </Styled.ShortsModalInner>
      </Styled.ShortsModalBox>
    </Modal>
  );
};

export default ShortsModal;
