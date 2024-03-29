import { useNavigate } from 'react-router-dom';
import { useSuspenseQueries } from '@tanstack/react-query';
import * as Styled from './TripHomeBody.styles';
import { SubTitle } from '@/components/common';
import StarIcon from '/starIcon.svg';
import DollarIcon from '/images/dollar.svg';
import TripCarousel from '../TripCarousel/TripCarousel';
import { getTripRecords } from '@/apis/trip-records';

const TripHomeBody = () => {
  const navigate = useNavigate();
  const [
    { data: tripRecordsDefault },
    { data: tripRecordsExpense },
    { data: tripRecordsTotalDays },
  ] = useSuspenseQueries({
    queries: [
      {
        queryKey: ['TripRecordsDefaultData'],
        queryFn: () => getTripRecords(),
      },
      {
        queryKey: ['TripRecordsExpenseFilterData'],
        queryFn: () => getTripRecords({ filter: 'expenseRangeType=100' }),
      },
      {
        queryKey: ['TripRecordsTotalDaysFilterData'],
        queryFn: () => getTripRecords({ filter: 'totalDays=2' }),
      },
    ],
  });

  const onClickMoveToList = (param: string): void => {
    navigate(`/trip/list?${param}`);
  };

  return (
    <>
      <Styled.Container>
        <div>
          <SubTitle margin="0 0 0.875rem" icon={StarIcon}>
            인기 크리에이터 일정 따라가기!
          </SubTitle>
          <TripCarousel size={170} tripRecordsData={tripRecordsDefault} />
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
            src="/images/theme1.jpg"
            alt="100만원으로 다녀온 인생 여행 썸네일"
          />
          <TripCarousel tripRecordsData={tripRecordsExpense} />
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
            src="/images/theme2.jpg"
            alt="1박 2일 여행 모음 썸네일"
          />
          <TripCarousel tripRecordsData={tripRecordsTotalDays} />
        </div>
      </Styled.Container>
    </>
  );
};

export default TripHomeBody;
