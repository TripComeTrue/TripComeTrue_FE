import { useSuspenseQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Introduction from '../Introduction/Introduction';
import MainCarousel from '../MainCarousel/MainCarousel';
import TripContents from '../TripContents/TripContents';
import { getTripRecordDetail } from '@/apis/trip-records';
import * as Styled from './TripDetailMain.styles';

const TripDetailMain = () => {
  const { tripRecordId } = useParams() as { tripRecordId: string };
  const { data: tripRecordDetailData, refetch: tripRecordDetailRefetch } =
    useSuspenseQuery({
      queryKey: ['TripRecordDetailData', tripRecordId],
      queryFn: () => getTripRecordDetail(tripRecordId),
    });

  return (
    <Styled.Container>
      <MainCarousel imagesData={tripRecordDetailData.images} />
      <Introduction
        tripRecordData={tripRecordDetailData}
        tripRecordDetailRefetch={tripRecordDetailRefetch}
      />
      <TripContents
        tripRecordId={tripRecordId}
        schedulesData={tripRecordDetailData.schedules}
      />
    </Styled.Container>
  );
};

export default TripDetailMain;
