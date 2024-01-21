import { ReactNode } from 'react';
import { Bubble, Button, SubTitle, Text } from '..';
import * as Styled from './TripRecordReviewCard.styles';
import { TripRecordReviewCardProps } from './TripRecordReviewCard.types';
import RatingIcon from '/images/rating.svg';
import ActionsModal from '../ActionsModal/ActionsModal';

const TripRecordReviewCard = ({ children }: TripRecordReviewCardProps) => {
  return <Styled.Container>{children}</Styled.Container>;
};

export default TripRecordReviewCard;

const Title = ({ children }: { children: ReactNode }) => {
  return <SubTitle fontSize={14}>{children}</SubTitle>;
};

const Main = ({
  nickname,
  averageRating,
  content,
}: {
  nickname: string;
  averageRating: number;
  content: string;
}) => {
  return (
    <Styled.ReviewContainer>
      <Styled.ImageWrapper>
        <Styled.ReviewImage src="https://source.unsplash.com/random" />
      </Styled.ImageWrapper>
      <Styled.ReviewContents>
        <Styled.InfoContainer>
          <Text fontSize={12} fontWeight={700}>
            {nickname}
          </Text>
          <Styled.Divider>&nbsp;|&nbsp;</Styled.Divider>
          <div>
            <img src={RatingIcon} alt="rating icon" />
            <Text fontSize={12} fontWeight={700}>
              {averageRating}
            </Text>
          </div>
        </Styled.InfoContainer>
        <Text fontSize={12}>{content}</Text>
      </Styled.ReviewContents>
    </Styled.ReviewContainer>
  );
};

const Rating = () => {
  return (
    <Styled.RatingContainer>
      <Styled.RatingCustom
        name="half-rating"
        defaultValue={0}
        precision={0.5}
      />
      <Text fontSize={12} fontWeight={700} color="gray">
        이 일정이 도움이 되셨나요?
      </Text>
    </Styled.RatingContainer>
  );
};

const Point = () => {
  return (
    <Styled.BubbleWrapper>
      <Bubble>+ 10P</Bubble>
    </Styled.BubbleWrapper>
  );
};

const WriteButton = () => {
  return (
    <Button variants="primary" size="lg">
      리뷰 작성하기
    </Button>
  );
};

TripRecordReviewCard.Title = Title;
TripRecordReviewCard.Main = Main;
TripRecordReviewCard.Rating = Rating;
TripRecordReviewCard.Point = Point;
TripRecordReviewCard.WriteButton = WriteButton;
TripRecordReviewCard.ActionsModal = ActionsModal;
