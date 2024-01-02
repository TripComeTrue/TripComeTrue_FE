/* eslint-disable react/jsx-props-no-spreading */
import { FieldValues } from 'react-hook-form';
import * as S from './EmailInput.styles';
import { EmailInputProps } from './EmailInput.types';
import { Label, TextFieldWrap } from '../TextField.styles';

function EmailInput({ register }: EmailInputProps<FieldValues>) {
  return (
    <TextFieldWrap>
      <Label htmlFor="email">아이디</Label>
      <S.EmailField
        type="email"
        id="email"
        {...register('email')}
        placeholder="이메일을 입력해주세요"
      />
    </TextFieldWrap>
  );
}

export default EmailInput;
