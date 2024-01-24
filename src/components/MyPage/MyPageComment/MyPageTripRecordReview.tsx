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
      {data?.data.length === 0 && <MyPageItemNone />}
      {data.data.map((item) => (
        <TripRecordReviewCard key={item.id}>
          <Styled.TripRecordReviewTop>
            <TripRecordReviewCard.Title>
              {item.postTitle}
            </TripRecordReviewCard.Title>
            <TripRecordReviewCard.ActionsModal
              onClickModify={() => {
                navigate(
                  `/trip/detail/${item.tripRecordId}/review/${item.id}/edit`,
                );
              }}
              onClickDelete={() => {}}
            />
          </Styled.TripRecordReviewTop>
          <TripRecordReviewCard.Main
            nickname="룰루랄라"
            averageRating={item.averageRating}
            content={item.content}
          />
          <TripRecordReviewCard.Rating disabled={false} myRatingScore={5} />
        </TripRecordReviewCard>
      ))}
    </div>
  );
}

export default MyPageTripRecordReview;
