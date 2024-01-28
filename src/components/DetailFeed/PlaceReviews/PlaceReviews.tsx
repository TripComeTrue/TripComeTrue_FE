import { Link } from 'react-router-dom';
import { Bubble, PlaceReviewCard, SubTitle } from '../../common';
import WriteIcon from '/images/write.svg';
import * as Styled from './PlaceReviews.styles';
import { PlaceReviewsProps } from './PlaceReviews.types';
import FormattedDate from '@/utils/formattedDate';

const PlaceReviews = ({
  placeReviewsData = {
    isFirst: true,
    isLast: true,
    nowPageNumber: 0,
    placeReviews: [],
    totalCount: 0,
  },
  placeId,
}: PlaceReviewsProps) => {
  const { totalCount, placeReviews } = placeReviewsData;

  return (
    <Styled.Container>
      <Styled.Header>
        <SubTitle>리뷰({totalCount})</SubTitle>
        <Styled.WriteBtnWrapper>
          <Link to={`/detailfeed/spot/${placeId}/review/write`}>
            <Styled.WriteBtn src={WriteIcon} alt="리뷰 작성 아이콘" />
          </Link>
          <Styled.BubbleWrapper>
            <Bubble direction="top">+ 2P</Bubble>
          </Styled.BubbleWrapper>
        </Styled.WriteBtnWrapper>
      </Styled.Header>

      <Styled.ReviewList>
        {placeReviews.map((placeReview) => (
          <Link
            key={placeReview.placeReviewId}
            to={`/detailfeed/spot/${placeId}/review/${placeReview.placeReviewId}/comment`}>
            <PlaceReviewCard>
              <PlaceReviewCard.PlaceHeader
                nickname={placeReview.nickname}
                profileUrl={placeReview.profileUrl}
                writeDate={FormattedDate(placeReview.createdAt)}
              />
              <PlaceReviewCard.Main
                imageUrl={placeReview.imageUrl}
                content={placeReview.content}
              />
              <PlaceReviewCard.InteractionButtons
                likeCount={placeReview.likeCount}
                commentCount={placeReview.commentCount}
              />
            </PlaceReviewCard>
          </Link>
        ))}
      </Styled.ReviewList>

      <Styled.ButtonWrapper>
        <Styled.ReviewMoreButton>
          <Link to={`/detailfeed/spot/${placeId}/review`}>리뷰 더 보기</Link>
        </Styled.ReviewMoreButton>
      </Styled.ButtonWrapper>
    </Styled.Container>
  );
};

export default PlaceReviews;
