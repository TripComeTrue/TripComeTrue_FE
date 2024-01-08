/* eslint-disable react/jsx-props-no-spreading */
import * as Styled from './PasswordInput.styles';
import { PasswordInputProps } from './PasswordInput.types';
import {
  ErrorMsg,
  Label,
  TextFieldWrap,
  ValidateIcon,
} from '../TextField.styles';
import { SignUpFormData } from '@/components/auth/SignUpForm/SignUpForm.types';

function PasswordInput({
  register,
  name,
  errors,
  getValues,
}: PasswordInputProps<SignUpFormData>) {
  const { password, passwordCheck } = getValues();
  const passwordValiation = {
    required: '비밀번호를 입력해주세요',
    pattern: {
      value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/,
      message:
        '공백을 제외한 영문 + 숫자 + 특수문자 8~20자 조합으로 입력해주세요',
    },
    minLength: { value: 8, message: '8자 이상 입력해주세요' },
    maxLength: { value: 20, message: '20자 이하로 입력해주세요' },
  };

  const passwordValiation2 = {
    ...passwordValiation,
    validate: {
      matchPassword: (value: string | undefined) => {
        if (name === 'password' || !getValues) return true;
        return password === value || '비밀번호가 일치하지 않습니다';
      },
    },
  };

  return (
    <TextFieldWrap>
      <Label htmlFor={name}>
        {name === 'password' ? '비밀번호' : '비밀번호 확인'}
      </Label>
      <Styled.PasswordField
        type="password"
        id={name}
        {...register(
          name,
          name === 'password' ? passwordValiation : passwordValiation2,
        )}
        placeholder="비밀번호를 입력해주세요"
        autoComplete="current-password"
        $iserror={`${Boolean(errors[name])}`}
      />
      {name === 'password' && password && (
        <ValidateIcon $isvalid={`${Boolean(errors.password)}`} />
      )}
      {name === 'passwordCheck' && passwordCheck && (
        <ValidateIcon $isvalid={`${Boolean(errors.passwordCheck)}`} />
      )}
      <ErrorMsg>
        {name === 'password'
          ? errors.password?.message
          : errors.passwordCheck?.message}
      </ErrorMsg>
    </TextFieldWrap>
  );
}

export default PasswordInput;
