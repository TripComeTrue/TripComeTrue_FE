/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SignInBtnIcon } from '../SignInBtns/SignInBtns.styles';
import { SignInBtnYanolja } from '../SignInEmailForm/SignInEmailForm.styles';
import SignUpFormWrap from './SignUpForm.styles';
import { SignUpFormData } from './SignUpForm.types';
import { EmailInput, PasswordInput } from '@/components/common/TextField';
import { Button } from '@/components/common';

function SignUpForm() {
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
  const pass2Watch = watch('password2');
  const onClickNext = () => {
    if (email === '' || errors.email) return;
    setIsPassPage(true);
  };
  const onSubmit = handleSubmit((data) => console.log(data));

  useEffect(() => {
    if (passWatch !== pass2Watch && pass2Watch) {
      setError('password2', {
        type: 'password-mismatch',
        message: '비밀번호가 일치하지 않습니다',
      });
    } else {
      // 비밀번호 일치시 오류 제거
      clearErrors('password2');
    }
  }, [passWatch, pass2Watch, setError, clearErrors]);

  useEffect(() => {
    if (
      email &&
      passWatch &&
      pass2Watch &&
      !errors.email &&
      !errors.password &&
      !errors.password2
    ) {
      setIsOk(true);
    } else {
      setIsOk(false);
    }
  }, [
    email,
    errors.email,
    errors.password,
    errors.password2,
    pass2Watch,
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
            name="password2"
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
