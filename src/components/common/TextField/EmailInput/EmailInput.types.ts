import { FieldValues, UseFormRegister } from 'react-hook-form';
import { LoginFormData } from '@/components/auth/SignInEmailForm/SignEmailForm.types';

export interface EmailInputProps<T extends FieldValues | LoginFormData> {
  register: UseFormRegister<T>;
}
