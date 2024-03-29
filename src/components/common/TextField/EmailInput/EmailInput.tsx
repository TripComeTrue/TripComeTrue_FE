/* eslint-disable react/jsx-props-no-spreading */
import { KeyboardEvent } from 'react';
import { isAxiosError } from 'axios';
import _ from 'lodash';
import * as Styled from './EmailInput.styles';
import { EmailInputProps } from './EmailInput.types';
import {
  ErrorMsg,
  Label,
  TextFieldWrap,
  ValidateIcon,
} from '../TextField.styles';
import { SignUpFormData } from '@/components/auth/SignUpForm/SignUpForm.types';
import { emailValidation } from '@/constants/Auth/validations';
import { checkDuplicatedEmail } from '@/apis/auth';

function EmailInput({
  register,
  errors,
  getValues,
  allowCheckEmail,
}: EmailInputProps<SignUpFormData>) {
  const { email } = getValues();

  const emailDuplicatedValidation = {
    ...emailValidation,
    validate: {
      chkDuplicated: _.throttle(async (v: string | undefined) => {
        try {
          const code = await checkDuplicatedEmail(v);
          if (code === 200) return true;
        } catch (error) {
          if (isAxiosError(error)) {
            if (error.status === 400) return '이미 가입된 회원입니다.';
          }
        }
        return '이미 가입된 회원입니다.';
      }, 100),
    },
  };

  // 엔터 이벤트를 막기
  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const key = event.key || event.keyCode;
    if (key === 'Enter' || key === 13) {
      event.preventDefault();
    }
  };

  return (
    <TextFieldWrap>
      <Label htmlFor="email">이메일</Label>
      <Styled.EmailField
        type="email"
        id="email"
        {...register(
          'email',
          allowCheckEmail ? emailDuplicatedValidation : emailValidation,
        )}
        placeholder="이메일을 입력해주세요"
        autoComplete="off"
        $iserror={`${Boolean(errors.email)}`}
        onKeyDown={onKeyDown}
      />
      {email && <ValidateIcon $isvalid={`${Boolean(errors.email)}`} />}
      <ErrorMsg>{errors.email?.message}</ErrorMsg>
    </TextFieldWrap>
  );
}

export default EmailInput;
