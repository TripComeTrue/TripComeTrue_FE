/* eslint-disable no-console */
import { useForm } from 'react-hook-form';
import Container from '@/components/common/Container';
import { SignInLogo } from '..';
import { SignInBtnIcon } from '../SignInBtns/SignInBtns.styles';
import * as S from './SignInEmailForm.styles';
import { LoginFormData } from './SignEmailForm.types';
import { EmailInput, PasswordInput } from '@/components/common/TextField';

function SignInEmailForm() {
  const { register, handleSubmit } = useForm<LoginFormData>();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Container>
      <SignInLogo />
      <S.SignInFormWrap onSubmit={onSubmit}>
        <EmailInput register={register} />
        <PasswordInput register={register} />
        <S.SignInBtnYanolja type="submit">
          <SignInBtnIcon icon="yanolja" />
          야놀자 통합 로그인
        </S.SignInBtnYanolja>
      </S.SignInFormWrap>
    </Container>
  );
}

export default SignInEmailForm;
