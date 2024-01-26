import { Bookmark, Text } from '@/components/common';
import * as Styled from './ShortCard.styles';
import { ShortCardProps } from './ShortCard.types';

const ShortCard = ({ shortData }: ShortCardProps) => {
  return (
    <Styled.Container>
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
    </Styled.Container>
  );
};

export default ShortCard;
