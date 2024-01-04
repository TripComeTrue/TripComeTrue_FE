/* eslint-disable react/jsx-props-no-spreading */
import * as Styled from './EmailInput.styles';
import { EmailInputProps } from './EmailInput.types';
import { ErrorMsg, Label, TextFieldWrap } from '../TextField.styles';
import { SignUpFormData } from '@/components/auth/SignUpForm/SignUpForm.types';

function EmailInput({ register, errors }: EmailInputProps<SignUpFormData>) {
  return (
    <TextFieldWrap>
      <Label htmlFor="email">아이디</Label>
      <Styled.EmailField
        type="email"
        id="email"
        {...register('email', {
          required: '이메일은 필수 입니다.',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: '올바른 이메일을 입력해주세요',
          },
        })}
        placeholder="이메일을 입력해주세요"
      />
      <ErrorMsg>{errors.email?.message}</ErrorMsg>
    </TextFieldWrap>
  );
}

export default EmailInput;
