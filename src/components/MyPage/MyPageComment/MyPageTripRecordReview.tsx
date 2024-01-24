import { useNavigate } from 'react-router-dom';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getMyTripRecordReview } from '@/apis/mypage';
import { TripRecordReviewCard } from '@/components/common';
import * as Styled from './MyPageTripRecordReview.styles';
import MyPageItemNone from '../MyPageItemNone/MyPageItemNone';

function MyPageTripRecordReview() {
  const navigate = useNavigate();
  const { data } = useSuspenseQuery({
    queryKey: ['mypage/trip-record'],
    queryFn: getMyTripRecordReview,
  });

  return (
    <div>
      {data.data.tripRecordReviews.length === 0 && <MyPageItemNone />}
      {data.data.tripRecordReviews.map((item) => (
        <TripRecordReviewCard key={item.tripRecordReviewId}>
          <Styled.TripRecordReviewTop>
            <TripRecordReviewCard.Title>
              {item.tripRecordTitle}
            </TripRecordReviewCard.Title>
            <TripRecordReviewCard.ActionsModal
              onClickModify={() => {
                navigate(
                  `/trip/detail/${item.tripRecordId}/review/${item.tripRecordReviewId}/edit`,
                );
              }}
              onClickDelete={() => {}}
            />
          </Styled.TripRecordReviewTop>
          <TripRecordReviewCard.Main
            nickname={item.nickname}
            averageRating={item.ratingScore}
            content={item.content}
          />
          <TripRecordReviewCard.Rating
            disabled={false}
            myRatingScore={item.ratingScore}
          />
        </TripRecordReviewCard>
      ))}
    </div>
  );
}

export default MyPageTripRecordReview;
