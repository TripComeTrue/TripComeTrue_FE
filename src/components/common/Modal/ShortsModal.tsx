import { useEffect, useRef, useState } from 'react';
import { Modal } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import YouTube, { YouTubePlayer, YouTubeProps } from 'react-youtube';
import { IoVolumeMediumSharp, IoVolumeMuteSharp } from 'react-icons/io5';
import { PiSealCheck } from 'react-icons/pi';
import { ShortsModalProps } from './ShortsModal.types';
import * as Styled from './ShortsModal.styles';
import history from './ShortsModal.utils';
import { Avatar, Text } from '..';

/**
 * 쇼츠 영상 재생 모달을 생성하는 컴포넌트 입니다.
 * @param open 열림 / 닫힘 여부를 전달합니다.
 * @param onClose 닫혔을때 실행할 함수를 전달합니다.
 * @param videoId `optional` 영상 재생id를 전달합니다.
 * @returns 쇼츠 영상 재생 모달 컴포넌트를 반환 합니다.
 */
const ShortsModal = ({ open, onClose, videoId }: ShortsModalProps) => {
  const [isMuted, setIsMuted] = useState(true);
  const player = useRef<YouTubePlayer>(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const opts: YouTubeProps['opts'] = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      controls: 0,
      autoplay: 1,
      autohide: 1,
      mute: 1,
      playsinline: 1,
      loop: 1,
      rel: 0,
      playlist: videoId,
    },
  };

  const onYoutubeReady: YouTubeProps['onReady'] = (event) => {
    player.current = event.target;
    // if (isMuted) {
    //   event.target.mute();
    // } else {
    //   event.target.unMute();
    // }
  };

  const onClickToggleMute = () => {
    if (isMuted) {
      player.current?.unMute();
    } else {
      player.current?.mute();
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

          <Styled.ShortsModalDescBox onClick={onClickToggleMute}>
            <Styled.ShortsModalProfile>
              <Avatar size={32} src="/busan.jpeg" />
              <Text color="white">여행박사</Text>
              <PiSealCheck />
            </Styled.ShortsModalProfile>
            <Link to="/trip">
              <Styled.ShortsModalTitle as="h3">
                너는 돈만 준비해. 계획은 내가 다 짜줄게
              </Styled.ShortsModalTitle>
            </Link>
            <Styled.ShortsModalToggleMuteBtn className="player-mute-btn">
              {isMuted ? <IoVolumeMuteSharp /> : <IoVolumeMediumSharp />}
            </Styled.ShortsModalToggleMuteBtn>
          </Styled.ShortsModalDescBox>
        </Styled.ShortsModalInner>
      </Styled.ShortsModalBox>
    </Modal>
  );
};

export default ShortsModal;
