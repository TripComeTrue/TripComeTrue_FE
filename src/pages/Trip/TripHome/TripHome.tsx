import { TripHomeBody, TripHomeHeader } from '@/components/Trip';
import * as Styled from './TripHome.styles';
import { TabBar } from '@/components/common';
import FloatingButton from '@/components/Trip/TripHome/FloatingButton/FloatingButton';
import TripRecordReviewCard from '@/components/common/TripRecordReviewCard/TripRecordReviewCard';

const TripHome = () => {
  return (
    <Styled.Container>
      <TripHomeHeader />
      <TripHomeBody />
      <TripRecordReviewCard>
        <TripRecordReviewCard.Title>
          이 여행의 후기(1)
        </TripRecordReviewCard.Title>

        <TripRecordReviewCard.Main />
      </TripRecordReviewCard>
      <FloatingButton />
      <TabBar />
    </Styled.Container>
  );
};

export default TripHome;
