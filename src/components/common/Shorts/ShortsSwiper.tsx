import { SlideType } from './Shorts.types';
import * as Styled from './Shorts.style';
import Bookmark from '../Bookmark/Bookmark';
import tokyo from '/tokyo.png';
import { ShortsModal } from '..';
import useModal from '@/hooks/common/useModal';

const ShortsSwiper: React.FC<SlideType> = ({
  thumbnailUrl,
  storeCount,
  videoUrl,
  profileImageUrl,
  memberName,
  tripRecordId,
  tripRecordTitle,
  memberId,
}) => {
  const { open, handleOpen, handleClose } = useModal();
  const shortsUrl = videoUrl.split('/').reverse()[0];

  return (
    <Styled.SliderContent onClick={handleOpen}>
      {open && (
        <ShortsModal
          open={open}
          onClose={handleClose}
          videoId={shortsUrl}
          profileImageUrl={profileImageUrl}
          memberName={memberName}
          tripRecordId={tripRecordId}
          tripRecordTitle={tripRecordTitle}
          memberId={memberId}
        />
      )}
      <Styled.SliderBackground>
        <img src={thumbnailUrl || tokyo} alt={tripRecordTitle} />
      </Styled.SliderBackground>
      <Styled.Bookmark>
        <Bookmark count={storeCount} />
      </Styled.Bookmark>
      <Styled.ShortTitle>{tripRecordTitle}</Styled.ShortTitle>
    </Styled.SliderContent>
  );
};
export default ShortsSwiper;
