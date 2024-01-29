import { Bookmark, ShortsModal, Text } from '@/components/common';
import * as Styled from './ShortCard.styles';
import { ShortCardProps } from './ShortCard.types';
import useModal from '@/hooks/common/useModal';
import videoKey from '@/utils/videoKey';

const ShortCard = ({ shortData }: ShortCardProps) => {
  const { open, handleOpen, handleClose } = useModal();

  return (
    <Styled.Container onClick={handleOpen}>
      <Styled.ImageContainer>
        <Styled.Image src={shortData.thumbnailUrl} />
        <Styled.BookMarkContainer>
          <Bookmark count={shortData.tripRecordStoreCount} />
        </Styled.BookMarkContainer>
        <Styled.Excerpt>
          <Text color="white" fontSize={10}>
            {shortData.tripRecordTitle}
          </Text>
        </Styled.Excerpt>
      </Styled.ImageContainer>
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
    </Styled.Container>
  );
};

export default ShortCard;
