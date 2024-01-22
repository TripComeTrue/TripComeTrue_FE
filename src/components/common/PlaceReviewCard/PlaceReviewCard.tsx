import { ReactNode } from 'react';
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
  nickname,
  profileUrl,
  writeDate,
}: {
  nickname: string;
  profileUrl: string;
  writeDate: string;
}) => {
  return (
    <Styled.ReviewInfo>
      <Styled.PlaceCreator>
        <Avatar src={profileUrl} size={32} />
        <Text fontWeight={700}>{nickname}</Text>
      </Styled.PlaceCreator>
      <Text fontSize={10} fontWeight={700}>
        {writeDate}
      </Text>
    </Styled.ReviewInfo>
  );
};

const MyPageHeader = ({
  nickname,
  profileUrl,
  writeDate,
  children,
}: {
  nickname: string;
  profileUrl: string;
  writeDate: string;
  children: ReactNode;
}) => {
  return (
    <div>
      <Styled.ReviewInfo>
        <Styled.MyPageCreator>
          <Avatar src={profileUrl} size={32} />
          <Text fontWeight={700}>{nickname}</Text>
        </Styled.MyPageCreator>

        {children}
      </Styled.ReviewInfo>
      <Text fontSize={10} fontWeight={700}>
        {writeDate}
      </Text>
    </div>
  );
};

const Main = ({ imageUrl, content }: { imageUrl: string; content: string }) => {
  return (
    <>
      {imageUrl && <Styled.ReviewImage src={imageUrl} alt="리뷰 대표" />}
      <Text>{content}</Text>
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
MyPageHeader.ActionsModal = ActionsModal;
