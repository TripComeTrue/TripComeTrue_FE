import { useNavigate } from 'react-router-dom';
import { useQueries } from '@tanstack/react-query';
import * as Styled from './TripHomeBody.styles';
import { SubTitle } from '@/components/common';
import starIcon from '/starIcon.svg';
import dollar from '/images/dollar.svg';
import shower from '/images/shower.svg';
import TripCarousel from '../TripCarousel/TripCarousel';
import ShortCarousel from '../ShortCarousel/ShortCarousel';
import { getTripRecords } from '@/apis/trip-records';
import CreatorCarousel from '../CreatorCarousel/CreatorCarousel';

const TripHomeBody = () => {
  const navigate = useNavigate();
  const [{ data: tripRecordsDefault }, { data: tripRecordsExpense }] =
    useQueries({
      queries: [
        {
          queryKey: ['TripRecordsDefault'],
          queryFn: () => getTripRecords(),
        },
        {
          queryKey: ['TripRecordsExpense'],
          queryFn: () => getTripRecords('expenseRangeType=100'),
        },
      ],
    });

  const onClickMoveToList = (param: string): void => {
    navigate(`/trip/list?${param}`);
  };

  return (
    <Styled.Container>
      <div>
        <SubTitle margin="0 0 0.875rem" icon={starIcon}>
          인기 크리에이터 일정 따라가기!
        </SubTitle>
        <TripCarousel size={170} tripRecordsData={tripRecordsDefault?.data} />
      </div>
      <div>
        <SubTitle margin="0 0 0.875rem" icon={starIcon}>
          인기 여행지 쇼츠보기
        </SubTitle>
        <ShortCarousel />
      </div>
      <div>
        <SubTitle margin="0 0 0.875rem" icon={starIcon}>
          내 여행 취향과 맞는 크리에이터
        </SubTitle>
        <CreatorCarousel />
      </div>
      <div>
        <SubTitle
          margin="0 1.25rem 0.875rem 0"
          icon={dollar}
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
          icon={shower}
          variant="more"
          onClickButton={() => onClickMoveToList('expenseRangeType=100')}>
          국내 스파&풀빌라 여행 일정 모음
        </SubTitle>
        <Styled.Thumbnail
          src="https://source.unsplash.com/random"
          alt="Thumbnail"
        />
        <TripCarousel tripRecordsData={tripRecordsExpense?.data} />
      </div>
    </Styled.Container>
  );
};

export default TripHomeBody;
