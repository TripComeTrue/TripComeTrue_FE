/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import { ConfirmPasswordForm } from './MyPageConfirmPassword.types';
import { Button, Text } from '@/components/common';
import { passwordValiation } from '@/constants/Auth/validations';
import * as Styled from './MyPageConfirmPassword.styles';
import { getTokenTest, postSignIn } from '@/apis/auth';

function MyPageConfirmPassword() {
  const { data } = useQuery({
    queryKey: ['token-test'],
    queryFn: getTokenTest,
  });
  const mutation = useMutation({
    mutationKey: ['login'],
    mutationFn: postSignIn,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ConfirmPasswordForm>({
    defaultValues: {
      password: '',
    },
  });
  const navigate = useNavigate();
  const onSubmit = handleSubmit((formData) => {
    if (data === undefined) return;
    const email = data?.data.email;
    const { password } = formData;
    mutation.mutate(
      { email, password },
      {
        onSuccess: () => {
          navigate('/mypage/edit-profile');
        },
        onError: () => {
          setError('password', { message: '비밀번호가 다릅니다.' });
        },
      },
    );
  });

  return (
    <Styled.MyPageFormWrap onSubmit={onSubmit}>
      <div>
        <label htmlFor="password">
          <Text fontSize={14} fontWeight={700}>
            계정 정보 수정을 위해 비밀번호를 입력해 주세요.
          </Text>
          <Styled.MyPageInput
            type="password"
            {...register('password', passwordValiation)}
            id="password"
            autoComplete="password"
            placeholder="비밀번호를 입력해 주세요."
          />
        </label>
        {errors.password && (
          <Styled.MyPageError>{errors.password.message}</Styled.MyPageError>
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
    </Styled.MyPageFormWrap>
  );
}

export default MyPageConfirmPassword;
