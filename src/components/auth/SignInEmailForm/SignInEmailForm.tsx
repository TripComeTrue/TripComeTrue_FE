/* eslint-disable no-console */
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { SignInBtnIcon } from '../SignInBtns/SignInBtns.styles';
import * as Styled from './SignInEmailForm.styles';
import { LoginFormData, SignInEmailFormProps } from './SignEmailForm.types';
import { EmailInput, PasswordInput } from '@/components/common/TextField';
import { setCookie } from '@/utils/cookie';
import MAX_AGE from '@/constants/maxAge';
import { postSignIn } from '@/apis/auth';

function SignInEmailForm({ handleOpen }: SignInEmailFormProps) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectUrl = searchParams.get('redirect');

  // 로그인 mutation
  const mutation = useMutation({
    mutationKey: ['login'],
    mutationFn: postSignIn,
  });

  // react hook form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<LoginFormData>({
    mode: 'onChange',
  });

  // 로그인 로직
  const onSubmit = handleSubmit(async (data) => {
    if (data.email === undefined || data.password === undefined) return;
    mutation.mutate(
      {
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: (token) => {
          setCookie('accessToken', token, MAX_AGE);
          navigate(`${redirectUrl || '/home'}`, { replace: true });
        },
        onError: (error) => {
          if (isAxiosError(error)) {
            handleOpen();
            console.log(error.response?.data.errorMessage);
          }
        },
      },
    );
  });

  return (
    <Styled.SignInFormWrap onSubmit={onSubmit}>
      <EmailInput register={register} errors={errors} getValues={getValues} />
      <PasswordInput
        register={register}
        name="password"
        errors={errors}
        getValues={getValues}
      />
      <Styled.SignInBtnYanolja type="submit">
        <SignInBtnIcon icon="yanolja" />
        야놀자 통합 로그인
      </Styled.SignInBtnYanolja>
    </Styled.SignInFormWrap>
  );
}

export default SignInEmailForm;
