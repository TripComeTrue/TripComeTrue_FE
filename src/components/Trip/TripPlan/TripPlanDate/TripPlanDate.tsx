import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ko from 'date-fns/locale/ko';
import { differenceInDays } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../TripPlanDate/DatePickerStyles.css';
import CalendarToday from '@mui/icons-material/CalendarMonth';
import * as Styled from '../TripPlanDate/TripPlanDate.styles';

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
    <Styled.Wrapper>
      <Styled.DateContainer>
        <h1>여행 기간을 선택해 주세요.</h1>
        <DatePicker
          selected={startDate}
          startDate={startDate}
          endDate={endDate}
          selectsRange={true}
          minDate={new Date()}
          locale={ko}
          dateFormat="yyyy.MM.dd"
          isClearable={true}
          showPopperArrow={false}
          onChange={(date) =>
            setDateRange({
              startDate: date[0] || null,
              endDate: date[1] || null,
            })
          }
          open={true}
          showMonthDropdown
          showYearDropdown
          showIcon
          icon={<CalendarToday style={{ fill: '#ABABAB' }} />}>
          <label className="react-datepicker-nightndays">
            {getNightAndDays()}
          </label>
        </DatePicker>
      </Styled.DateContainer>
      <Styled.ButtonContainer>
        <Styled.Button
          style={{ backgroundColor: 'white', border: '1px solid #D9D9D9' }}
          onClick={goBack}>
          취소
        </Styled.Button>
        <Styled.Button>
          <Link to="/trip/country">다음</Link>
        </Styled.Button>
      </Styled.ButtonContainer>
    </Styled.Wrapper>
  );
};

export default TripPlanDate;
