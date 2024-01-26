import { MouseEvent, ReactNode, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Bubble, Button, SubTitle, Text } from '..';
import * as Styled from './TripRecordReviewCard.styles';
import { TripRecordReviewCardProps } from './TripRecordReviewCard.types';
import RatingIcon from '/images/rating.svg';
import ActionsModal from '../ActionsModal/ActionsModal';
import { postTripRecordReview } from '@/apis/trip-records';

const TripRecordReviewCard = ({ children }: TripRecordReviewCardProps) => {
  return <Styled.Container>{children}</Styled.Container>;
};

export default TripRecordReviewCard;

const Title = ({ children }: { children: ReactNode }) => {
  return <SubTitle fontSize={14}>{children}</SubTitle>;
};

const Main = ({
  reviewImage,
  nickname,
  averageRating,
  content,
}: {
  reviewImage: string;
  nickname: string;
  averageRating: number;
  content: string;
}) => {
  return (
    <Styled.ReviewContainer>
      <Styled.ImageWrapper>
        <Styled.ReviewImage src={reviewImage} />
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

const Rating = ({
  myRatingScore,
  tripRecordId = '',
  disabled,
}: {
  disabled: boolean;
  myRatingScore: number;
  tripRecordId?: string;
}) => {
  const [disable, setDisable] = useState(false);
  const [rating, setRating] = useState(0);
  const { mutate: tripRecordReviewMutate } = useMutation({
    mutationFn: (ratingScore: number) =>
      postTripRecordReview(tripRecordId, ratingScore),
    onSuccess: (data) => {
      setRating(data.ratingScore);
      setDisable(true);
    },
  });

  const onClickRating = (event: MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation();
    const target = event.target as HTMLSpanElement;
    const ratingScore = Number(target.innerText.split(' ')[0]);
    if (ratingScore) {
      tripRecordReviewMutate(ratingScore);
    }
  };

  return (
    <Styled.RatingContainer>
      <Styled.RatingCustom
        name="half-rating"
        defaultValue={0}
        value={myRatingScore || rating}
        precision={0.5}
        onClick={onClickRating}
        disabled={disabled || disable}
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

const EmptyMain = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <Styled.EmptyContainer style={{ padding: '1.25rem 1rem 0' }}>
      <Text color="gray" fontSize={14}>
        {title}
      </Text>
      <Text color="gray" fontSize={10}>
        {subTitle}
      </Text>
    </Styled.EmptyContainer>
  );
};

TripRecordReviewCard.Title = Title;
TripRecordReviewCard.Main = Main;
TripRecordReviewCard.Rating = Rating;
TripRecordReviewCard.Point = Point;
TripRecordReviewCard.WriteButton = WriteButton;
TripRecordReviewCard.ActionsModal = ActionsModal;
TripRecordReviewCard.EmptyMain = EmptyMain;
