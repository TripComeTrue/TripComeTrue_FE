import { useParams } from 'react-router-dom';
import { useQueries } from '@tanstack/react-query';
import { SimpleNav, SubTitle } from '@/components/common';
import * as Styled from './TripDetail.styles';
import {
  Introduction,
  MainCarousel,

  // TripCarousel,
  TripComment,
  TripContents,
} from '@/components/Trip';
import { getTripRecord, getTripRecordLatestReview } from '@/apis/trip-records';
import TripRecordReviewCard from '@/components/common/TripRecordReviewCard/TripRecordReviewCard';
import { getCookie } from '@/utils/cookie';

const TripDetail = () => {
  const isSignIn = getCookie('accessToken');
  const { tripRecordId } = useParams() as { tripRecordId: string };

  const [{ data: tripRecordData }, { data: tripRecordReviewData }] = useQueries(
    {
      queries: [
        {
          queryKey: ['TripRecordDetailData'],
          queryFn: () => getTripRecord(tripRecordId),
        },
        {
          queryKey: ['TripRecordReviewData'],
          queryFn: () => {
            if (isSignIn) return getTripRecordLatestReview(tripRecordId);
            return null;
          },
        },
      ],
    },
  );

  console.log(isSignIn);
  console.log(tripRecordReviewData);

  return (
    <div>
      <SimpleNav>여행후기</SimpleNav>
      <Styled.Container>
        <MainCarousel imagesData={tripRecordData?.data.images} />
        <Introduction tripRecordData={tripRecordData?.data} />
        <TripContents schedulesData={tripRecordData?.data.schedules} />
        <TripComment />
        {isSignIn && (
          <TripRecordReviewCard>
            <TripRecordReviewCard.Main
              nickname="홍길동"
              averageRating={4}
              content="여행이 조아"
            />
            <TripRecordReviewCard.Rating />
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
