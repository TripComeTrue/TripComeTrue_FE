import { Avatar, Text } from '..';
import * as Styled from './PlaceReviewCard.styles';
import LikeIcon from '/images/like.svg';
import CommentIcon from '/images/comment.svg';
import { PlaceReviewCardProps } from './PlaceReviewCardtypes';
import ActionsModal from '../ActionsModal/ActionsModal';

const PlaceReviewCard = ({ children }: PlaceReviewCardProps) => {
  return <Styled.ReviewItem>{children}</Styled.ReviewItem>;
};

export default PlaceReviewCard;

const PlaceHeader = ({
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
      <Styled.PlaceCreator>
        <Avatar src={profileUrl} size={32} />
        <Text fontWeight={700}>{nickName}</Text>
      </Styled.PlaceCreator>
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
    <div>
      <Styled.ReviewInfo>
        <Styled.MyPageCreator>
          <Avatar src={profileUrl} size={32} />
          <Text fontWeight={700}>{nickName}</Text>
        </Styled.MyPageCreator>

        <ActionsModal />
      </Styled.ReviewInfo>
      <Text fontSize={10} fontWeight={700}>
        {days}
      </Text>
    </div>
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

PlaceReviewCard.PlaceHeader = PlaceHeader;
PlaceReviewCard.MyPageHeader = MyPageHeader;
PlaceReviewCard.Main = Main;
PlaceReviewCard.InteractionButtons = InteractionButtons;
