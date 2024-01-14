import { Avatar, Bookmark, Text } from '@/components/common';
import * as Styled from './TripCard.styles';
import MarkIcon from '/images/mark.svg';
import comment from '/images/comment.svg';
import pxToRem from '@/utils/pxToRem';
import { TripCardProps } from './TripCard.types';

const TripCard = ({ size = 152 }: TripCardProps) => {
  const stringifiedSize = pxToRem(size);

  return (
    <Styled.Container $size={stringifiedSize}>
      <Styled.ImageContainer $size={stringifiedSize}>
        <Styled.Image
          src="https://source.unsplash.com/random"
          alt="여행 일정"
        />
        <Styled.BookMarkContainer>
          <Bookmark count={999} />
        </Styled.BookMarkContainer>
        <Styled.Creator>
          <Avatar src="https://source.unsplash.com/random" size={12} />
          <Text fontSize={10} color="white">
            류스나
          </Text>
          <img src={MarkIcon} alt="mark icon" />
        </Styled.Creator>
      </Styled.ImageContainer>
      <Styled.InfoContainer>
        <Text fontSize={10} color="gray">
          5박 7일 ・ 스위스 외 3곳
        </Text>
        <Text fontSize={12} fontWeight={700}>
          너는 돈만 준비해. 계획은...
        </Text>
        <Styled.Comment>
          <img src={comment} alt="commentIcon" />
          <Text fontSize={10} color="gray">
            124
          </Text>
        </Styled.Comment>
      </Styled.InfoContainer>
      <div />
    </Styled.Container>
  );
};

export default TripCard;
