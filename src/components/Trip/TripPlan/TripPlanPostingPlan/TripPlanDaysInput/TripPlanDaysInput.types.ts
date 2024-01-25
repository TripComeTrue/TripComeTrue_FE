import { FieldValues, UseFormRegister } from 'react-hook-form';

export interface TripPlanDaysInputProps {
  selectedDay: number | null;
  formData: FormData[];
  setFormData: React.Dispatch<React.SetStateAction<FormData[]>>;
  register: UseFormRegister<FieldValues>;
  handleInputChange: (
    day: number,
    field: string,
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  selectedPlace: string;
  isPlaceModalOpen: { isPaneOpenLeft: boolean };
  setIsPlaceModalOpen: React.Dispatch<
    React.SetStateAction<{
      isPaneOpenLeft: boolean;
    }>
  >;
  closePlaceListModal: VoidFunction;
  handlePlaceModalSelection: (place: string) => void;
}

interface FormData {
  city: string;
  places: Place[];
}

interface Place {
  id: number;
  place: string;
  note: string;
  photo: string;
  tags: string;
}
