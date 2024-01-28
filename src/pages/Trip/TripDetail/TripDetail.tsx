import { Link, useParams } from 'react-router-dom';
import { useQueries } from '@tanstack/react-query';
import { useEffect } from 'react';
import { SimpleNav, SubTitle, TripRecordReviewCard } from '@/components/common';
import * as Styled from './TripDetail.styles';
import {
  Introduction,
  MainCarousel,
  TripCarousel,
  TripCarouselSkeleton,
  TripComment,
  TripContents,
} from '@/components/Trip';
import {
  getTripRecord,
  getTripRecordLatestReview,
  getTripRecords,
} from '@/apis/trip-records';
import { getCookie } from '@/utils/cookie';

const TripDetail = () => {
  const isSignIn = getCookie('accessToken');
  const { tripRecordId } = useParams() as { tripRecordId: string };
  const [
    { data: tripRecordDetailData, refetch: tripRecordDetailRefetch },
    {
      data: tripRecordLatestReviewData,
      refetch: tripRecordLatestReviewRefetch,
    },
    { data: tripRecordsDefaultData, refetch: tripRecordsDefaultRefetch },
  ] = useQueries({
    queries: [
      {
        queryKey: ['TripRecordDetailData', tripRecordId],
        queryFn: () => getTripRecord(tripRecordId),
      },
      {
        queryKey: ['TripRecordLatestReviewData'],
        queryFn: () => {
          if (isSignIn) return getTripRecordLatestReview(tripRecordId);
          return null;
        },
      },
      {
        queryKey: ['TripRecordsDefaultData'],
        queryFn: () => getTripRecords(),
      },
    ],
  });

  useEffect(() => {
    tripRecordLatestReviewRefetch();
    tripRecordsDefaultRefetch();
  }, [tripRecordId]);

  return (
    <div>
      <SimpleNav>여행후기</SimpleNav>
      <Styled.Container>
        <MainCarousel imagesData={tripRecordDetailData?.images} />
        <Introduction
          tripRecordData={tripRecordDetailData}
          tripRecordDetailRefetch={tripRecordDetailRefetch}
        />
        <TripContents
          tripRecordId={tripRecordId}
          schedulesData={tripRecordDetailData?.schedules}
        />
        <TripComment />
        {isSignIn && (
          <TripRecordReviewCard>
            <TripRecordReviewCard.Title>
              이 여행 후기의 리뷰({tripRecordLatestReviewData?.totalCount})
            </TripRecordReviewCard.Title>
            {tripRecordLatestReviewData?.latestTripRecordReview ? (
              <TripRecordReviewCard.Main
                reviewImage={
                  tripRecordLatestReviewData?.latestTripRecordReview.imageUrl
                }
                nickname={
                  tripRecordLatestReviewData?.latestTripRecordReview.nickname
                }
                averageRating={
                  tripRecordLatestReviewData?.latestTripRecordReview.ratingScore
                }
                content={
                  tripRecordLatestReviewData?.latestTripRecordReview.content
                }
              />
            ) : (
              <TripRecordReviewCard.EmptyMain
                title="리뷰를 기다리고 있어요"
                subTitle="여행 일정을 복사해 계획을 세우고 여행을 다녀와보세요!"
              />
            )}
            <TripRecordReviewCard.Rating
              disabled={!!tripRecordLatestReviewData?.myRatingScore}
              tripRecordId={tripRecordId}
              myRatingScore={tripRecordLatestReviewData?.myRatingScore}
            />
            {tripRecordLatestReviewData?.canRegisterContent && (
              <Link
                to={`/trip/trip-record/review/${tripRecordLatestReviewData?.latestTripRecordReview.tripRecordReviewId}/write`}>
                <TripRecordReviewCard.WriteButton />
              </Link>
            )}
          </TripRecordReviewCard>
        )}
        <Styled.OtherTripDetails>
          <SubTitle margin="0 1.25rem 0.875rem 0">
            최근 올라온 여행 후기
          </SubTitle>
          {tripRecordsDefaultData ? (
            <TripCarousel tripRecordsData={tripRecordsDefaultData} />
          ) : (
            <TripCarouselSkeleton />
          )}
        </Styled.OtherTripDetails>
      </Styled.Container>
    </div>
  );
};

export default TripDetail;
