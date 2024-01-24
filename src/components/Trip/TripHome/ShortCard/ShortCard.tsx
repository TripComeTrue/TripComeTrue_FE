import ReactPlayer from 'react-player';
import { Bookmark, Text } from '@/components/common';
import * as Styled from './ShortCard.styles';
import { ShortCardProps } from './ShortCard.types';

const ShortCard = ({ data }: ShortCardProps) => {
  console.log(data);
  return (
    <Styled.Container>
      <Styled.ImageContainer>
        <ReactPlayer
          url="https://www.youtube.com/shorts/AdL4EQm5CUg"
          controls
          light
          width="100%"
          height="100%"
        />
        {/* <Styled.Image src="https://source.unsplash.com/random" alt="Short" /> */}
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
