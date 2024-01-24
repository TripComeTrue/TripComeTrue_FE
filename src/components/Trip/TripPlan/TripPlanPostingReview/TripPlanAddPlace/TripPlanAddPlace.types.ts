import React from 'react';
import {
  UseFormWatch,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
import { SelectModalProps } from '@/components/common/Modal/SelectModal.types';

export type TripPlanAddPlaceProps = Pick<
  SelectModalProps,
  'open' | 'onClose'
> & {
  register: UseFormRegister<AddPlaceForm>;
  watch: UseFormWatch<AddPlaceForm>;
  setValue: UseFormSetValue<AddPlaceForm>;
  onSubmit: (e?: React.BaseSyntheticEvent<object, any, any>) => void;
};

export interface AddPlaceForm {
  address: string;
  placeName: string;
}

export type FieldName = keyof AddPlaceForm;
