import { useSuspenseQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SubTitle } from '@/components/common';
import TripCarousel from '../../TripHome/TripCarousel/TripCarousel';
import * as Styled from './OtherTripRecords.styles';
import { getTripRecords } from '@/apis/trip-records';

const OtherTripRecords = () => {
  const { tripRecordId } = useParams() as { tripRecordId: string };
  const { data: tripRecordsDefaultData, refetch: tripRecordsDefaultRefetch } =
    useSuspenseQuery({
      queryKey: ['TripRecordsDefaultData'],
      queryFn: () => getTripRecords(),
    });

  useEffect(() => {
    tripRecordsDefaultRefetch();
  }, [tripRecordId]);

  return (
    <Styled.Container>
      <SubTitle margin="0 1.25rem 0.875rem 0">최근 올라온 여행 후기</SubTitle>
      <TripCarousel tripRecordsData={tripRecordsDefaultData} />
    </Styled.Container>
  );
};

export default OtherTripRecords;
