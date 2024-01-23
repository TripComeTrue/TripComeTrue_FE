import { useState } from 'react';
import DatePicker from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import { getYear, getMonth } from 'date-fns';
import CalendarToday from '@mui/icons-material/CalendarMonth';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePickerStyles.css';
import * as Styled from '../TripPlanCommon/TripPlanCommon.styles';
import { TripDateProps } from './TripPlanDate.types';
import { useTripFormData } from '@/pages/Trip/TripPlan/TripFormDataContext';
import { months, years } from '@/constants/tripPlanAndRecord';
import dateToString from '@/utils/dateToString';
import { getNightAndDays } from './TripPlanDate.utils';

const TripPlanDate = () => {
  const { tripPlanData, updateTripPlanData } = useTripFormData();
  const [dateRange, setDateRange] = useState<TripDateProps>({
    startDate: tripPlanData.tripStartDay
      ? new Date(tripPlanData.tripStartDay)
      : new Date(),
    endDate: tripPlanData.tripEndDay ? new Date(tripPlanData.tripEndDay) : null,
  });
  const { startDate, endDate } = dateRange;

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
          onChange={(date) => {
            const newStartDate = date[0] || null;
            const newEndDate = date[1] || null;
            setDateRange({
              startDate: newStartDate,
              endDate: newEndDate,
            });
            updateTripPlanData({
              tripStartDay: dateToString(newStartDate),
              tripEndDay: dateToString(newEndDate),
            });
          }}
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
                        {years.map((option: number) => (
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
                        value={months[getMonth(date)]}
                        onChange={({ target: { value } }) =>
                          changeMonth(months.indexOf(value))
                        }>
                        {months.map((option) => (
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

export default TripPlanDate;
