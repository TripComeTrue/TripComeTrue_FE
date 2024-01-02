import { FieldValues, UseFormRegister } from 'react-hook-form';

export interface PasswordInputProps<T extends FieldValues> {
  register: UseFormRegister<T>;
}
