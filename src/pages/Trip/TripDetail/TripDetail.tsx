import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { SimpleNav, SubTitle } from '@/components/common';
import * as Styled from './TripDetail.styles';
import {
  Introduction,
  MainCarousel,

  // TripCarousel,
  TripComment,
  TripContents,
} from '@/components/Trip';
import { getTripRecord } from '@/apis/trip-records';
import TripRecordReviewCard from '@/components/common/TripRecordReviewCard/TripRecordReviewCard';

const TripDetail = () => {
  const { tripRecordId } = useParams() as { tripRecordId: string };

  const { data: tripRecordData } = useQuery({
    queryKey: ['TripRecordDetailData'],
    queryFn: () => getTripRecord(tripRecordId),
  });

  return (
    <div>
      <SimpleNav>여행후기</SimpleNav>
      <Styled.Container>
        <MainCarousel imagesData={tripRecordData?.data.images} />
        <Introduction tripRecordData={tripRecordData?.data} />
        <TripContents schedulesData={tripRecordData?.data.schedules} />
        <TripComment />
        <TripRecordReviewCard>
          <TripRecordReviewCard.Title>
            이 여행의 후기(1)
          </TripRecordReviewCard.Title>
          <TripRecordReviewCard.Main />
          <TripRecordReviewCard.Rating />
        </TripRecordReviewCard>
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
