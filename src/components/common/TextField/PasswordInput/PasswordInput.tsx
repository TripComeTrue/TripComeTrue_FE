/* eslint-disable react/jsx-props-no-spreading */
import * as S from './PasswordInput.styles';
import { LoginFormData } from '@/components/auth/SignInEmailForm/SignEmailForm.types';
import { PasswordInputProps } from './PasswordInput.types';
import { Label, TextFieldWrap } from '../TextField.styles';

function PasswordInput({ register }: PasswordInputProps<LoginFormData>) {
  return (
    <TextFieldWrap>
      <Label htmlFor="password">비밀번호</Label>
      <S.PasswordField
        type="password"
        id="password"
        {...register('password')}
        placeholder="비밀번호를 입력해주세요"
      />
    </TextFieldWrap>
  );
}

export default PasswordInput;
