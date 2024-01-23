import { differenceInCalendarDays, differenceInDays } from 'date-fns';
import { TripDateProps } from './TripPlanDate.types';

export const getNightAndDays = ({ startDate, endDate }: TripDateProps) => {
  if (startDate && endDate) {
    const nights = differenceInDays(endDate, startDate);
    return `${nights}박 ${nights + 1}일`;
  }
  return '';
};

export const getTotalTripDays = ({ startDate, endDate }: TripDateProps) => {
  if (startDate instanceof Date && endDate instanceof Date) {
    const totalTripDays = differenceInCalendarDays(endDate, startDate);
    return totalTripDays;
  }
  return 0;
};
