import { TripPlanResBody, TripPlanResData } from '@/@types/trip-alldata.types';

export const transformToFormData = (
  data: TripPlanResData,
): TripPlanResBody[] => {
  return data.tripPlanSchedules.map((schedule) => ({
    code: 200,
    data: {
      countries: data.countries,
      tripStartDay: data.tripStartDay,
      tripEndDay: data.tripEndDay,
      tripPlanSchedules: [schedule],
    },
  }));
};
