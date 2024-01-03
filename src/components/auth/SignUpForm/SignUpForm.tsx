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
  } = useForm<SignUpFormData>({
    mode: 'onChange',
  });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <SignUpFormWrap onSubmit={onSubmit}>
      <EmailInput register={register} errors={errors} />
      <PasswordInput register={register} name="password" errors={errors} />
      <PasswordInput register={register} name="password2" errors={errors} />
      <SignInBtnYanolja type="submit">
        <SignInBtnIcon icon="yanolja" />
        야놀자 통합 회원가입 완료
      </SignInBtnYanolja>
    </SignUpFormWrap>
  );
}

export default SignUpForm;
