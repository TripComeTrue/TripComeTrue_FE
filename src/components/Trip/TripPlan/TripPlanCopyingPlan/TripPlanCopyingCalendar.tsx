import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSuspenseQuery } from '@tanstack/react-query';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../TripPlanDate/DatePickerStyles.css';
import { ko } from 'date-fns/locale';
import { differenceInCalendarDays, getMonth, getYear } from 'date-fns';
import CalendarToday from '@mui/icons-material/CalendarMonth';
import { Months, Years } from '@/constants/tripPlanAndRecord';
import { getNightAndDays } from '../TripPlanDate/TripPlanDate.utils';
import * as Styled from '../TripPlanCommon/TripPlanCommon.styles';
import { getTripPlanOfSomeone } from '@/apis/trip-planandrecords';
import { arrayToDate } from '@/utils/arrayToDate';
import { TripCopyDateProps } from '@/pages/Trip/TripPlan/TripPlanCopy';

const TripPlanCopyingCalendar = ({
  dateRange,
  setDateRange,
}: {
  dateRange: TripCopyDateProps;
  setDateRange: React.Dispatch<React.SetStateAction<TripCopyDateProps>>;
}) => {
  const { id } = useParams();
  const { data: tripPlanOfSomeone } = useSuspenseQuery({
    queryKey: ['trip-plan-someone', id],
    queryFn: () => getTripPlanOfSomeone(Number(id)),
  });

  useEffect(() => {
    if (
      tripPlanOfSomeone.data.tripStartDay &&
      tripPlanOfSomeone.data.tripEndDay
    ) {
      setDateRange({
        startDate: arrayToDate(tripPlanOfSomeone.data.tripStartDay),
        endDate: arrayToDate(tripPlanOfSomeone.data.tripEndDay),
      });
    }
  }, [tripPlanOfSomeone]);

  const { startDate, endDate } = dateRange;

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [newStartDate] = dates;

    if (newStartDate) {
      const originalDuration = differenceInCalendarDays(
        dateRange.endDate!,
        dateRange.startDate!,
      );

      const updatedEndDate = new Date(newStartDate);
      updatedEndDate.setDate(updatedEndDate.getDate() + originalDuration);

      setDateRange({
        startDate: newStartDate,
        endDate: updatedEndDate,
      });
    }
  };

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Title>
          여행 기간을 <br />
          선택해 주세요
        </Styled.Title>
        <DatePicker
          selected={startDate}
          startDate={startDate}
          endDate={endDate}
          minDate={null}
          disabledKeyboardNavigation
          selectsRange
          locale={ko}
          dateFormat="yyyy.MM.dd"
          isClearable
          showPopperArrow={false}
          onChange={handleDateChange}
          open
          showIcon
          icon={<CalendarToday />}
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => {
            return (
              <div
                style={{
                  margin: 10,
                }}>
                <div>
                  <div className="header">
                    <div className="year-and-month">
                      <select
                        className="select-year"
                        value={getYear(date)}
                        onChange={({ target: { value } }) =>
                          changeYear(Number(value))
                        }>
                        {Years.map((option: number) => (
                          <option
                            className="year-dropdown"
                            key={option}
                            value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <select
                        className="select-month"
                        value={Months[getMonth(date)]}
                        onChange={({ target: { value } }) =>
                          changeMonth(Months.indexOf(value))
                        }>
                        {Months.map((option) => (
                          <option
                            className="month-dropdown"
                            key={option}
                            value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="arrowButton">
                      <button
                        type="button"
                        onClick={decreaseMonth}
                        disabled={prevMonthButtonDisabled}>
                        {'<'}
                      </button>
                      <button
                        type="button"
                        onClick={increaseMonth}
                        disabled={nextMonthButtonDisabled}>
                        {'>'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          }}>
          <label className="react-datepicker-nightndays">
            {getNightAndDays({ startDate, endDate })}
          </label>
        </DatePicker>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default TripPlanCopyingCalendar;
