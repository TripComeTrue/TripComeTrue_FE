import { Dispatch, SetStateAction } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { TripPlanResBody } from '@/@types/trip-alldata.types';

export interface TripPlanDaysInputProps {
  selectedDay: number | null;
  formData: TripPlanResBody[];
  setFormData: Dispatch<SetStateAction<TripPlanResBody[]>>;
  register: UseFormRegister<FieldValues>;
  handleInputChange: (
    day: number,
    field: string,
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  dayImages: { [key: number]: string[] };
  onDayImagesChange: (chosenDay: number, imageUrls: string[]) => void;
}
