import { useNavigate } from 'react-router-dom';
import { useQueries } from '@tanstack/react-query';
import * as Styled from './TripHomeBody.styles';
import { SubTitle } from '@/components/common';
import StarIcon from '/starIcon.svg';
import DollarIcon from '/images/dollar.svg';
import TripCarousel from '../TripCarousel/TripCarousel';
import ShortCarousel from '../ShortCarousel/ShortCarousel';
import { getTripRecords } from '@/apis/trip-records';
import CreatorCarousel from '../CreatorCarousel/CreatorCarousel';

const TripHomeBody = () => {
  const navigate = useNavigate();
  const [
    { data: tripRecordsDefault },
    { data: tripRecordsExpense },
    { data: tripRecordsTotalDays },
  ] = useQueries({
    queries: [
      {
        queryKey: ['TripRecordsDefaultData'],
        queryFn: () => getTripRecords(),
      },
      {
        queryKey: ['TripRecordsExpenseFilterData'],
        queryFn: () => getTripRecords('expenseRangeType=100'),
      },
      {
        queryKey: ['TripRecordsTotalDaysFilterData'],
        queryFn: () => getTripRecords('totalDays=2'),
      },
    ],
  });

  const onClickMoveToList = (param: string): void => {
    navigate(`/trip/list?${param}`);
  };

  return (
    <Styled.Container>
      <div>
        <SubTitle margin="0 0 0.875rem" icon={StarIcon}>
          인기 크리에이터 일정 따라가기!
        </SubTitle>
        <TripCarousel size={170} tripRecordsData={tripRecordsDefault?.data} />
      </div>
      <div>
        <SubTitle margin="0 0 0.875rem" icon={StarIcon}>
          인기 여행지 쇼츠보기
        </SubTitle>
        <ShortCarousel />
      </div>
      <div>
        <SubTitle margin="0 0 0.875rem" icon={StarIcon}>
          내 여행 취향과 맞는 크리에이터
        </SubTitle>
        <CreatorCarousel />
      </div>
      <div>
        <SubTitle
          margin="0 1.25rem 0.875rem 0"
          icon={DollarIcon}
          variant="more"
          onClickButton={() => onClickMoveToList('expenseRangeType=100')}>
          100만원으로 다녀온 인생 여행
        </SubTitle>
        <Styled.Thumbnail
          src="https://source.unsplash.com/random"
          alt="Thumbnail"
        />
        <TripCarousel tripRecordsData={tripRecordsExpense?.data} />
      </div>
      <div>
        <SubTitle
          margin="0 1.25rem 0.875rem 0"
          icon={StarIcon}
          variant="more"
          onClickButton={() => onClickMoveToList('totalDays=2')}>
          1박2일 여행 일정 모음
        </SubTitle>
        <Styled.Thumbnail
          src="https://source.unsplash.com/random"
          alt="Thumbnail"
        />
        <TripCarousel tripRecordsData={tripRecordsTotalDays?.data} />
      </div>
    </Styled.Container>
  );
};

export default TripHomeBody;
