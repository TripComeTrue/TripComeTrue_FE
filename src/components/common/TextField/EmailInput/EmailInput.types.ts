import {
  FieldErrors,
  FieldValues,
  UseFormGetValues,
  UseFormRegister,
} from 'react-hook-form';
import { LoginFormData } from '@/components/auth/SignInEmailForm/SignEmailForm.types';
import { SignUpFormData } from '@/components/auth/SignUpForm/SignUpForm.types';

export interface EmailInputProps<
  T extends FieldValues | LoginFormData | SignUpFormData,
> {
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  getValues: UseFormGetValues<T>;
}
