import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ko from 'date-fns/locale/ko';
import { differenceInDays } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePickerStyles.css';
import CalendarToday from '@mui/icons-material/CalendarMonth';
import * as Styled from './TripPlanDate.styles';
import { Button, SubTitle } from '@/components/common';
import { TripPlanFooter } from '..';

interface DateProps {
  startDate: Date | null;
  endDate: Date | null;
}

const TripPlanDate = () => {
  const navigate = useNavigate();
  const [dateRange, setDateRange] = useState<DateProps>({
    startDate: new Date(),
    endDate: null,
  });
  const { startDate, endDate } = dateRange;

  const goBack = () => {
    navigate(-1);
  };
  const getNightAndDays = () => {
    if (startDate && endDate) {
      const nights = differenceInDays(endDate, startDate);
      return `${nights}박 ${nights + 1}일`;
    }
    return '';
  };

  return (
    <>
      <Styled.Wrapper>
        <Styled.DateContainer>
          <SubTitle margin="0.8rem">여행 기간을 선택해 주세요.</SubTitle>
          <DatePicker
            selected={startDate}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            minDate={new Date()}
            locale={ko}
            dateFormat="yyyy.MM.dd"
            isClearable
            showPopperArrow={false}
            onChange={(date) =>
              setDateRange({
                startDate: date[0] || null,
                endDate: date[1] || null,
              })
            }
            open
            showMonthDropdown
            showYearDropdown
            showIcon
            icon={<CalendarToday style={{ fill: '#ABABAB' }} />}>
            <label className="react-datepicker-nightndays">
              {getNightAndDays()}
            </label>
          </DatePicker>
        </Styled.DateContainer>
      </Styled.Wrapper>
      <TripPlanFooter />
    </>
  );
};

export default TripPlanDate;
