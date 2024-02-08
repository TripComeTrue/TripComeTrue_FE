import { Link, useParams } from 'react-router-dom';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { TripRecordReviewCard } from '@/components/common';
import { getTripRecordLatestReview } from '@/apis/trip-records';

const ReviewAlert = () => {
  const { tripRecordId } = useParams() as { tripRecordId: string };
  const {
    data: tripRecordLatestReviewData,
    refetch: tripRecordLatestReviewRefetch,
  } = useSuspenseQuery({
    queryKey: ['TripRecordLatestReviewData'],
    queryFn: () => getTripRecordLatestReview(tripRecordId),
  });

  const { imageUrl, nickname, ratingScore, content, tripRecordReviewId } =
    tripRecordLatestReviewData.latestTripRecordReview || '';

  useEffect(() => {
    tripRecordLatestReviewRefetch();
  }, [tripRecordId]);

  return (
    <TripRecordReviewCard>
      <TripRecordReviewCard.Title>
        이 여행 후기의 리뷰({tripRecordLatestReviewData.totalCount})
      </TripRecordReviewCard.Title>
      {tripRecordLatestReviewData.latestTripRecordReview ? (
        <TripRecordReviewCard.Main
          reviewImage={imageUrl}
          nickname={nickname}
          averageRating={ratingScore}
          content={content}
        />
      ) : (
        <TripRecordReviewCard.EmptyMain
          title="리뷰를 기다리고 있어요"
          subTitle="여행 일정을 복사해 계획을 세우고 여행을 다녀와보세요!"
        />
      )}
      <TripRecordReviewCard.Rating
        disabled={!!tripRecordLatestReviewData.myRatingScore}
        tripRecordId={tripRecordId}
        myRatingScore={tripRecordLatestReviewData.myRatingScore}
      />
      {tripRecordLatestReviewData.canRegisterContent && (
        <Link to={`/trip/trip-record/review/${tripRecordReviewId}/write`}>
          <TripRecordReviewCard.WriteButton />
        </Link>
      )}
    </TripRecordReviewCard>
  );
};

export default ReviewAlert;
