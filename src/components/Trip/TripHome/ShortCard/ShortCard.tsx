import ReactPlayer from 'react-player';
import { Bookmark, Text } from '@/components/common';
import * as Styled from './ShortCard.styles';

const ShortCard = ({ shortData }: { shortData: ShortsDataType }) => {
  const { videoUrl, thumbnailUrl, storedCount, tripRecordTitle } = shortData;

  return (
    <Styled.Container>
      <Styled.ImageContainer>
        <ReactPlayer url={videoUrl} controls light width="100%" height="100%" />
        <Styled.Image src={thumbnailUrl} alt="Short" />
        <Styled.BookMarkContainer>
          <Bookmark count={storedCount} />
        </Styled.BookMarkContainer>
        <Styled.Excerpt>
          <Text color="white" fontSize={10}>
            {tripRecordTitle}
          </Text>
        </Styled.Excerpt>
      </Styled.ImageContainer>
    </Styled.Container>
  );
};

export default ShortCard;
