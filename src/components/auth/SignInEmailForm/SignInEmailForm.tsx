/* eslint-disable no-console */
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { isAxiosError } from 'axios';
import { SignInBtnIcon } from '../SignInBtns/SignInBtns.styles';
import * as Styled from './SignInEmailForm.styles';
import { LoginFormData } from './SignEmailForm.types';
import { EmailInput, PasswordInput } from '@/components/common/TextField';
import client from '@/apis';

function SignInEmailForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<LoginFormData>({
    mode: 'onChange',
  });
  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await client.post('/login', {
        email: data.email,
        password: data.password,
      });
      const { email, name } = res.data;
      console.log(email, name);
      navigate('/home', { replace: true });
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error.response?.data.errorMessage);
      }
    }
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
