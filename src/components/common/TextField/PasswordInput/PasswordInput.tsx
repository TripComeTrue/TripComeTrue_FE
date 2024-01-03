/* eslint-disable react/jsx-props-no-spreading */
import * as S from './PasswordInput.styles';
import { PasswordInputProps } from './PasswordInput.types';
import { ErrorMsg, Label, TextFieldWrap } from '../TextField.styles';
import { SignUpFormData } from '@/components/auth/SignUpForm/SignUpForm.types';

function PasswordInput({
  register,
  name,
  errors,
}: PasswordInputProps<SignUpFormData>) {
  return (
    <TextFieldWrap>
      <Label htmlFor={name}>
        {name === 'password' ? '비밀번호' : '비밀번호 확인'}
      </Label>
      <S.PasswordField
        type="password"
        id={name}
        {...register(name, {
          required: '비밀번호를 입력해주세요',
          pattern: {
            value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/,
            message:
              '공백을 제외한 영문 + 숫자 + 특수문자 8~20자 조합으로 입력해주세요',
          },
          minLength: { value: 8, message: '8자 이상 입력해주세요' },
          maxLength: { value: 20, message: '20자 이하로 입력해주세요' },
        })}
        placeholder="비밀번호를 입력해주세요"
      />
      <ErrorMsg>
        {name === 'password'
          ? errors.password?.message
          : errors.password2?.message}
      </ErrorMsg>
    </TextFieldWrap>
  );
}

export default PasswordInput;
