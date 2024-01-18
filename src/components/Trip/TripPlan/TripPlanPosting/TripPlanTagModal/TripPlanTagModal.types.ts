import React from 'react';
import {
  UseFormWatch,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
import { SelectModalProps } from '@/components/common/Modal/SelectModal.types';

export type TripPlanTagModalProps = Pick<
  SelectModalProps,
  'open' | 'onClose'
> & {
  register: UseFormRegister<TagForm>;
  watch: UseFormWatch<TagForm>;
  setValue: UseFormSetValue<TagForm>;
  onSubmit: (e?: React.BaseSyntheticEvent<object, any, any>) => void;
};

export interface TagForm {
  type: TagTypeEnum;
  url: string;
}

export enum TagTypeEnum {
  flight = 'flight',
  accommodation = 'accommodation',
  location = 'location',
  ticket = 'ticket',
}
