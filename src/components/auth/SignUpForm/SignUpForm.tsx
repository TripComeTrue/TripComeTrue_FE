/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { SignInBtnIcon } from '../SignInBtns/SignInBtns.styles';
import { SignInBtnYanolja } from '../SignInEmailForm/SignInEmailForm.styles';
import SignUpFormWrap from './SignUpForm.styles';
import { SignUpFormData, SignUpFormProps } from './SignUpForm.types';
import { EmailInput, PasswordInput } from '@/components/common/TextField';
import { Button } from '@/components/common';
import { checkDuplicatedEmail, postSignIn, postSignUp } from '@/apis/auth';
import MAX_AGE from '@/constants/maxAge';
import { setCookie } from '@/utils/cookie';

function SignUpForm({ handleOpen, setErrorMsg }: SignUpFormProps) {
  const navigate = useNavigate();
  // 회원가입 mutation
  const signupMutation = useMutation({
    mutationKey: ['signup'],
    mutationFn: postSignUp,
  });
  // 로그인 mutation
  const signInMutation = useMutation({
    mutationKey: ['signin'],
    mutationFn: postSignIn,
  });
  const [isPassPage, setIsPassPage] = useState(false); // 이메일/비밀번호 화면 전환
  const [isOk, setIsOk] = useState(false); // 가입버튼 활성화 여부

  // react hook form hook
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

  // 이메일 입력후 다음 버튼 눌렀을때
  const onClickNext = async () => {
    if (email === '' || errors.email) return;
    const code = await checkDuplicatedEmail(email);
    if (code === 400) {
      setError('email', {
        type: 'duplicated-email',
        message: '이미 가입된 회원입니다.',
      });
      return;
    }
    setIsPassPage(true);
  };

  // 회원가입 완료 로직
  const onSubmit = handleSubmit(async (data) => {
    if (data.email === undefined || data.password === undefined) return;
    const res = await signupMutation.mutateAsync(
      { email: data.email, password: data.password },
      {
        onError: (error) => {
          if (isAxiosError(error)) {
            setErrorMsg(error.response?.data.errorMessage);
            handleOpen();
          }
        },
      },
    );
    // 회원가입이 정상적으로 완료되면, 로그인
    if (res.code === 200) {
      signInMutation.mutate(
        {
          email: data.email,
          password: data.password,
        },
        {
          onSuccess: (token) => {
            setCookie('accessToken', token, MAX_AGE);
            navigate('/auth/welcome');
          },
          onError: (error) => {
            if (isAxiosError(error)) {
              setErrorMsg(error.response?.data.errorMessage);
              handleOpen();
            }
          },
        },
      );
    }
  });

  useEffect(() => {
    // 비밀번호 확인창에 값이 적혀있는 상태에서, 서로 일치하지 않으면
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

  // 값이 모두 있고, 문제가 없으면 가입버튼 활성화
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
      {/* 이메일 체크 하는 부분 */}
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
      {/* 이메일 체크 후 다음 화면으로 넘어가면 회원가입 버튼으로 변경 */}
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
