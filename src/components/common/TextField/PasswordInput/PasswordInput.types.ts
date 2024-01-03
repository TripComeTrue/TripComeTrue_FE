import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { LoginFormData } from '@/components/auth/SignInEmailForm/SignEmailForm.types';
import { SignUpFormData } from '@/components/auth/SignUpForm/SignUpForm.types';

export interface PasswordInputProps<
  T extends FieldValues | LoginFormData | SignUpFormData,
> {
  register: UseFormRegister<T>;
  name: 'email' | 'password' | 'password2';
  errors: FieldErrors<T>;
}
