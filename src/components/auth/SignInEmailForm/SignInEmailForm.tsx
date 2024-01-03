/* eslint-disable no-console */
import { useForm } from 'react-hook-form';
import { SignInBtnIcon } from '../SignInBtns/SignInBtns.styles';
import * as S from './SignInEmailForm.styles';
import { LoginFormData } from './SignEmailForm.types';
import { EmailInput, PasswordInput } from '@/components/common/TextField';

function SignInEmailForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    mode: 'onChange',
  });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <S.SignInFormWrap onSubmit={onSubmit}>
      <EmailInput register={register} errors={errors} />
      <PasswordInput register={register} name="password" errors={errors} />
      <S.SignInBtnYanolja type="submit">
        <SignInBtnIcon icon="yanolja" />
        야놀자 통합 로그인
      </S.SignInBtnYanolja>
    </S.SignInFormWrap>
  );
}

export default SignInEmailForm;
