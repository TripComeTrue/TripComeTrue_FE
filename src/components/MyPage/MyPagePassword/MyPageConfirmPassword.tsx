/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ConfirmPasswordForm } from './MyPageConfirmPassword.types';
import { Button, Text } from '@/components/common';
import { passwordValiation } from '@/constants/Auth/validations';
import * as Styled from './MyPageConfirmPassword.styles';

function MyPageConfirmPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConfirmPasswordForm>({
    defaultValues: {
      password: '',
    },
  });
  const navigate = useNavigate();
  const onSubmit = handleSubmit((formData) => {
    console.log(formData);
    navigate('/mypage/edit-profile');
  });

  return (
    <Styled.MyPageConfirmPasswordForm onSubmit={onSubmit}>
      <div>
        <label htmlFor="password">
          <Text fontSize={14} fontWeight={700}>
            계정 정보 수정을 위해 비밀번호를 입력해 주세요.
          </Text>
          <Styled.MyPagePasswordInput
            type="password"
            {...register('password', passwordValiation)}
            id="password"
            autoComplete="password"
            placeholder="비밀번호를 입력해 주세요."
          />
        </label>
        {errors.password && (
          <Styled.MyPagePasswordError>
            {errors.password.message}
          </Styled.MyPagePasswordError>
        )}
      </div>
      <div>
        <Button
          size="lg"
          variants="primary"
          disabled={errors.password !== undefined}>
          확인
        </Button>
      </div>
    </Styled.MyPageConfirmPasswordForm>
  );
}

export default MyPageConfirmPassword;
