/* eslint-disable no-console */
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { SignInBtnIcon } from '../SignInBtns/SignInBtns.styles';
import { SignInBtnYanolja } from '../SignInEmailForm/SignInEmailForm.styles';
import SignUpFormWrap from './SignUpForm.styles';
import { SignUpFormData } from './SignUpForm.types';
import { EmailInput, PasswordInput } from '@/components/common/TextField';

function SignUpForm() {
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
  const onSubmit = handleSubmit((data) => console.log(data));
  const passWatch = watch('password');
  const pass2Watch = watch('password2');

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

  return (
    <SignUpFormWrap onSubmit={onSubmit}>
      <EmailInput register={register} errors={errors} />
      <PasswordInput register={register} name="password" errors={errors} />
      <PasswordInput
        register={register}
        name="password2"
        errors={errors}
        getValues={getValues}
      />
      <SignInBtnYanolja type="submit">
        <SignInBtnIcon icon="yanolja" />
        야놀자 통합 회원가입 완료
      </SignInBtnYanolja>
    </SignUpFormWrap>
  );
}

export default SignUpForm;
