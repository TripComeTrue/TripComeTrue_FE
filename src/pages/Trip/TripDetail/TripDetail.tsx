import { useParams } from 'react-router-dom';
import { useMutation, useQueries } from '@tanstack/react-query';
import { SimpleNav, SubTitle } from '@/components/common';
import * as Styled from './TripDetail.styles';
import {
  Introduction,
  MainCarousel,

  // TripCarousel,
  TripComment,
  TripContents,
} from '@/components/Trip';
import {
  getTripRecord,
  getTripRecordLatestReview,
  postTripRecordReview,
} from '@/apis/trip-records';
import TripRecordReviewCard from '@/components/common/TripRecordReviewCard/TripRecordReviewCard';
import { getCookie } from '@/utils/cookie';

const TripDetail = () => {
  const isSignIn = getCookie('accessToken');
  const { tripRecordId } = useParams() as { tripRecordId: string };

  const [{ data: tripRecordDetailData }, { data: tripRecordLatestReviewData }] =
    useQueries({
      queries: [
        {
          queryKey: ['TripRecordDetailData'],
          queryFn: () => getTripRecord(tripRecordId),
        },
        {
          queryKey: ['TripRecordLatestReviewData'],
          queryFn: () => {
            if (isSignIn) return getTripRecordLatestReview(tripRecordId);
            return null;
          },
        },
      ],
    });

  console.log(tripRecordLatestReviewData);

  return (
    <div>
      <SimpleNav>여행후기</SimpleNav>
      <Styled.Container>
        <MainCarousel imagesData={tripRecordDetailData?.images} />
        <Introduction tripRecordData={tripRecordDetailData} />
        <TripContents schedulesData={tripRecordDetailData?.schedules} />
        <TripComment />
        {isSignIn && (
          <TripRecordReviewCard>
            <TripRecordReviewCard.Title>
              이 여행 후기의 리뷰({tripRecordLatestReviewData?.totalCount})
            </TripRecordReviewCard.Title>
            {tripRecordLatestReviewData?.latestTripRecordReview ? (
              <TripRecordReviewCard>
                <TripRecordReviewCard.Main
                  nickname={tripRecordLatestReviewData?.nickname}
                  averageRating={tripRecordLatestReviewData?.ratingScore}
                  content={tripRecordLatestReviewData?.content}
                />
              </TripRecordReviewCard>
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
          </TripRecordReviewCard>
        )}
        <Styled.OtherTripDetails>
          <SubTitle margin="0 1.25rem 0.875rem 0">
            이 여행과 비슷한 여행
          </SubTitle>
          {/* <TripCarousel /> */}
        </Styled.OtherTripDetails>
      </Styled.Container>
    </div>
  );
};

export default TripDetail;
