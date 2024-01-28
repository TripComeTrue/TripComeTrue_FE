import ShortCard from '../ShortCard/ShortCard';
import * as Styled from './ShortsCarousel.styles';
import 'swiper/swiper-bundle.css';
import { ShortsCarouselProps } from './ShortsCarousel.types';
import useModal from '@/hooks/common/useModal';
import { ShortsModal } from '@/components/common';
import videoKey from '@/utils/videoKey';

const ShortsCarousel = ({ shortsData }: ShortsCarouselProps) => {
  const { open, handleOpen, handleClose } = useModal();

  return (
    <Styled.Container spaceBetween={8} slidesPerView={2.3}>
      {shortsData?.map((shortData) => (
        <Styled.Slide key={shortData.videoId} onClick={handleOpen}>
          <ShortCard shortData={shortData} />
          {open && (
            <ShortsModal
              open={open}
              onClose={handleClose}
              videoId={videoKey(shortData.videoUrl)}
              profileImageUrl={shortData.member.profileImage}
              memberName={shortData.member.nickname}
              tripRecordId={shortData.tripRecordId}
              tripRecordTitle={shortData.tripRecordTitle}
              memberId={shortData.memberId}
            />
          )}
        </Styled.Slide>
      ))}
    </Styled.Container>
  );
};

export default ShortsCarousel;
