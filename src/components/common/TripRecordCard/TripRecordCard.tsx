import { Avatar, Text } from '..';
import * as Styled from './TripRecordCard.styles';
import LikeIcon from '/images/like.svg';
import CommentIcon from '/images/comment.svg';
import { TripRecordCardProps } from './TripRecordCard.types';

const TripRecordCard = ({ children }: TripRecordCardProps) => {
  return <Styled.ReviewItem>{children}</Styled.ReviewItem>;
};

export default TripRecordCard;

const TripHeader = ({
  nickName,
  profileUrl,
  days,
}: {
  nickName: string;
  profileUrl: string;
  days: string;
}) => {
  return (
    <Styled.ReviewInfo>
      <Styled.TripCreator>
        <Avatar src={profileUrl} size={32} />
        <Text fontWeight={700}>{nickName}</Text>
      </Styled.TripCreator>
      <Text fontSize={10} fontWeight={700}>
        {days}
      </Text>
    </Styled.ReviewInfo>
  );
};

const MyPageHeader = ({
  nickName,
  profileUrl,
  days,
}: {
  nickName: string;
  profileUrl: string;
  days: string;
}) => {
  return (
    <Styled.ReviewInfo>
      <Styled.MyPageCreator>
        <Avatar src={profileUrl} size={32} />
        <Text fontWeight={700}>{nickName}</Text>
      </Styled.MyPageCreator>
      <Text fontSize={10} fontWeight={700}>
        {days}
      </Text>
    </Styled.ReviewInfo>
  );
};

const Main = ({ imageUrl, text }: { imageUrl: string; text: string }) => {
  return (
    <>
      {imageUrl && <Styled.ReviewImage src={imageUrl} alt="리뷰 대표" />}
      <Text>{text}</Text>
    </>
  );
};

const InteractionButtons = ({
  likeCount,
  commentCount,
}: {
  likeCount: number;
  commentCount: number;
}) => {
  return (
    <Styled.InteractionButtons>
      <Styled.LikeButton>
        <img src={LikeIcon} alt="like icon" />
        <Text fontSize={12} fontWeight={700} color="gray">
          {likeCount}
        </Text>
      </Styled.LikeButton>
      <Styled.CommentButton>
        <img src={CommentIcon} alt="comment icon" />
        <Text fontSize={12} fontWeight={700} color="gray">
          {commentCount || '댓글 달기'}
        </Text>
      </Styled.CommentButton>
    </Styled.InteractionButtons>
  );
};

TripRecordCard.TripHeader = TripHeader;
TripRecordCard.MyPageHeader = MyPageHeader;
TripRecordCard.Main = Main;
TripRecordCard.InteractionButtons = InteractionButtons;
