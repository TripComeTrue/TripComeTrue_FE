/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { isAxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { SignInBtnIcon } from '../SignInBtns/SignInBtns.styles';
import { SignInBtnYanolja } from '../SignInEmailForm/SignInEmailForm.styles';
import SignUpFormWrap from './SignUpForm.styles';
import { SignUpFormData, SignUpFormProps } from './SignUpForm.types';
import { EmailInput, PasswordInput } from '@/components/common/TextField';
import { Button } from '@/components/common';
import client from '@/apis/client';

function SignUpForm({ handleOpen, setErrorMsg }: SignUpFormProps) {
  const navigate = useNavigate();
  const [isPassPage, setIsPassPage] = useState(false);
  const [isOk, setIsOk] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
    setError,
    clearErrors,
  } = useForm<SignUpFormData>({
    mode: 'onChange',
  });
  const { email } = getValues();
  const passWatch = watch('password');
  const passChkWatch = watch('passwordCheck');
  const onClickNext = () => {
    if (email === '' || errors.email) return;
    setIsPassPage(true);
  };
  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await client.post('/v1/member/signup', {
        email: data.email,
        password: data.password,
      });
      const { email: userEmail, name } = res.data;
      console.log(userEmail, name);
      // TODO: 나중에 welcome 페이지로 변경 필요
      navigate('/auth/signin-email');
    } catch (error) {
      if (isAxiosError(error)) {
        setErrorMsg(error.response?.data.errorMessage);
        handleOpen();
      }
    }
  });

  useEffect(() => {
    if (passWatch !== passChkWatch && passChkWatch) {
      setError('passwordCheck', {
        type: 'password-mismatch',
        message: '비밀번호가 일치하지 않습니다',
      });
    } else {
      // 비밀번호 일치시 오류 제거
      clearErrors('passwordCheck');
    }
  }, [passWatch, passChkWatch, setError, clearErrors]);

  useEffect(() => {
    if (
      email &&
      passWatch &&
      passChkWatch &&
      !errors.email &&
      !errors.password &&
      !errors.passwordCheck
    ) {
      setIsOk(true);
    } else {
      setIsOk(false);
    }
  }, [
    email,
    errors.email,
    errors.password,
    errors.passwordCheck,
    passChkWatch,
    passWatch,
  ]);

  return (
    <SignUpFormWrap onSubmit={onSubmit}>
      {!isPassPage ? (
        <>
          <EmailInput
            register={register}
            errors={errors}
            getValues={getValues}
            allowCheckEmail
          />
          <Button
            type="button"
            size="lg"
            variants="primary"
            disabled={email === '' || Boolean(errors.email)}
            onClick={onClickNext}>
            다음
          </Button>
        </>
      ) : (
        <>
          <PasswordInput
            register={register}
            name="password"
            errors={errors}
            getValues={getValues}
          />
          <PasswordInput
            register={register}
            name="passwordCheck"
            errors={errors}
            getValues={getValues}
          />
        </>
      )}
      {isPassPage && (
        <SignInBtnYanolja type="submit" disabled={!isOk}>
          <SignInBtnIcon icon={isOk ? 'yanolja' : 'yanolja_b'} />
          야놀자 통합 회원가입 완료
        </SignInBtnYanolja>
      )}
    </SignUpFormWrap>
  );
}

export default SignUpForm;
