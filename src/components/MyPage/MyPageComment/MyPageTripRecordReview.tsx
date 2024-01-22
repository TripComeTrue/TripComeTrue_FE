import { useNavigate } from 'react-router-dom';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getMyTripRecordReview } from '@/apis/mypage';
import { TripRecordReviewCard } from '@/components/common';
import * as Styled from './MyPageTripRecordReview.styles';

function MyPageTripRecordReview() {
  const navigate = useNavigate();
  const { data } = useSuspenseQuery({
    queryKey: ['mypage/trip-record'],
    queryFn: getMyTripRecordReview,
  });

  return (
    <div>
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
          <TripRecordReviewCard.Rating />
        </TripRecordReviewCard>
      ))}
    </div>
  );
}

export default MyPageTripRecordReview;
