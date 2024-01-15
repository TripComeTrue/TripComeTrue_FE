import { useEffect, useRef, useState } from 'react';
import { Modal } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import YouTube, { YouTubeEvent } from 'react-youtube';
import { IoVolumeMediumSharp, IoVolumeMuteSharp } from 'react-icons/io5';
import { ShortsModalProps } from './ShortsModal.types';
import * as Styled from './ShortsModal.styles';
import history from './ShortsModal.utils';

/**
 * 쇼츠 영상 재생 모달을 생성하는 컴포넌트 입니다.
 * @param open 열림 / 닫힘 여부를 전달합니다.
 * @param onClose 닫혔을때 실행할 함수를 전달합니다.
 * @param videoId `optional` 영상 재생id를 전달합니다.
 * @returns 쇼츠 영상 재생 모달 컴포넌트를 반환 합니다.
 */
function ShortsModal({ open, onClose, videoId }: ShortsModalProps) {
  const [isMuted, setIsMuted] = useState(true);
  const player = useRef<YouTubeEvent<any>>();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      loop: 1,
      rel: 0,
      playsinline: 1,
      playlist: videoId,
      disablekb: 1,
    },
  };

  const onYoutubeReady = (event: YouTubeEvent<any>) => {
    player.current = event;
    if (isMuted) {
      event.target.mute();
    } else {
      event.target.unMute();
    }
  };

  const onClickToggleMute = () => {
    if (isMuted) {
      player.current?.target.unMute();
    } else {
      player.current?.target.mute();
    }
    setIsMuted((prev) => !prev);
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
        <Styled.ShortsModalInner>
          <YouTube
            videoId={videoId}
            opts={opts}
            onReady={onYoutubeReady}
            className="youtube-api"
          />
          <Styled.ShortsModalToggleMuteBtn onClick={onClickToggleMute}>
            {isMuted ? <IoVolumeMuteSharp /> : <IoVolumeMediumSharp />}
          </Styled.ShortsModalToggleMuteBtn>
        </Styled.ShortsModalInner>
      </Styled.ShortsModalBox>
    </Modal>
  );
}

export default ShortsModal;
