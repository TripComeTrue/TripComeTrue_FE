import { useState } from 'react';
import DatePicker from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import { getYear, getMonth, differenceInDays } from 'date-fns';
import _ from 'lodash';
import CalendarToday from '@mui/icons-material/CalendarMonth';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePickerStyles.css';
import * as Styled from '../TripPlanCommon/TripPlanCommon.styles';
import {
  TripPlanPrevButton,
  TripPlanNextButton,
} from '../TripPlanCommon/TripPlanCommon';

const TripPlanDate = () => {
  const [dateRange, setDateRange] = useState<TripDateProps>({
    startDate: new Date(),
    endDate: null,
  });
  const { startDate, endDate } = dateRange;
  const years = _.range(2010, getYear(new Date()) + 10);
  const months = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ];

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
        <TripPlanPrevButton />
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
            onChange={(date) =>
              setDateRange({
                startDate: date[0] || null,
                endDate: date[1] || null,
              })
            }
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
                          onClick={decreaseMonth}
                          disabled={prevMonthButtonDisabled}>
                          {'<'}
                        </button>
                        <button
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
              {getNightAndDays()}
            </label>
          </DatePicker>
        </Styled.Container>
        <TripPlanNextButton />
      </Styled.Wrapper>
    </>
  );
};

export default TripPlanDate;
