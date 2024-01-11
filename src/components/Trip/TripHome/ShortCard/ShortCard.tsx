import { Bookmark, Text } from '@/components/common';
import * as Styled from './ShortCard.styles';

const ShortCard = () => {
  return (
    <Styled.Container>
      <Styled.ImageContainer>
        <Styled.Image src="https://source.unsplash.com/random" alt="Short" />
        <Styled.BookMarkContainer>
          <Bookmark count={999} />
        </Styled.BookMarkContainer>
        <Styled.Excerpt>
          <Text color="white" fontSize={10}>
            방콕 여행 꿀팁 알려드립니다
          </Text>
        </Styled.Excerpt>
      </Styled.ImageContainer>
    </Styled.Container>
  );
};

export default ShortCard;
