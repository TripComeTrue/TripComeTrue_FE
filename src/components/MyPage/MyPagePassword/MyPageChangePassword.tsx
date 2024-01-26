/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { isAxiosError } from 'axios';
import { Button, Text } from '@/components/common';
import { passwordValiation } from '@/constants/Auth/validations';
import { ChangePasswordForm } from './MyPageChangePassword.types';
import * as StyledInput from './MyPageConfirmPassword.styles';
import MyPageChangePasswordInputWrap from './MyPageChangePassword.styles';
import { patchChangePassword, postCheckPassword } from '@/apis/mypage';

function MyPageChangePassword() {
  const checkMutation = useMutation({
    mutationKey: ['check-password'],
    mutationFn: postCheckPassword,
  });
  const mutation = useMutation({
    mutationKey: ['change-password'],
    mutationFn: patchChangePassword,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
    clearErrors,
  } = useForm<ChangePasswordForm>({
    mode: 'onChange',
    defaultValues: {
      newPassword: '',
      newPasswordCheck: '',
    },
  });
  const navigate = useNavigate();
  const onSubmit = handleSubmit(async (formData) => {
    const code = await checkMutation.mutateAsync(
      {
        newPassword: formData.newPassword,
        confirmPassword: formData.newPasswordCheck,
      },
      {
        onError: (error) => {
          if (isAxiosError(error)) {
            setError('newPassword', {
              type: 'old-password',
              message: error.response?.data.errorMessage,
            });
          }
        },
      },
    );
    if (code === 200) {
      mutation.mutate(
        {
          newPassword: formData.newPassword,
          confirmPassword: formData.newPasswordCheck,
        },
        {
          onSuccess: () => {
            navigate('/mypage');
          },
          onError: (error) => {
            if (isAxiosError(error)) {
              setError('newPassword', {
                message: error.response?.data.errorMessage,
              });
            }
          },
        },
      );
    }
  });

  const newPassword = watch('newPassword');
  const newPasswordCheck = watch('newPasswordCheck');

  const passwordValiation2 = {
    ...passwordValiation,
    validate: {
      matchPassword: (value: string | undefined) => {
        return newPassword === value || '비밀번호가 일치하지 않습니다';
      },
    },
  };

  useEffect(() => {
    if (newPassword !== newPasswordCheck && newPasswordCheck) {
      setError('newPasswordCheck', {
        type: 'password-mismatch',
        message: '비밀번호가 일치하지 않습니다',
      });
    } else {
      // 비밀번호 일치시 오류 제거
      clearErrors('newPasswordCheck');
    }
    if (errors.newPassword?.type === 'old-password') {
      clearErrors('newPassword');
    }
  }, [newPassword, newPasswordCheck, setError, clearErrors]);

  return (
    <StyledInput.MyPageFormWrap onSubmit={onSubmit}>
      <div>
        <MyPageChangePasswordInputWrap>
          <label htmlFor="new-password">
            <Text fontSize={14} fontWeight={700}>
              변경할 비밀번호를 입력해 주세요.
            </Text>
            <StyledInput.MyPageInput
              type="password"
              {...register('newPassword', passwordValiation)}
              id="new-password"
              autoComplete="off"
              placeholder="비밀번호를 입력해 주세요."
            />
          </label>
          {errors.newPassword && (
            <StyledInput.MyPageError>
              {errors.newPassword.message}
            </StyledInput.MyPageError>
          )}
        </MyPageChangePasswordInputWrap>
        <MyPageChangePasswordInputWrap>
          <label htmlFor="new-password-check">
            <Text fontSize={14} fontWeight={700}>
              변경할 비밀번호를 확인해 주세요.
            </Text>
            <StyledInput.MyPageInput
              type="password"
              {...register('newPasswordCheck', passwordValiation2)}
              id="new-password-check"
              autoComplete="off"
              placeholder="비밀번호를 입력해 주세요."
            />
          </label>
          {errors.newPasswordCheck && (
            <StyledInput.MyPageError>
              {errors.newPasswordCheck.message}
            </StyledInput.MyPageError>
          )}
        </MyPageChangePasswordInputWrap>
      </div>
      <div>
        <Button size="lg" variants="primary" type="submit">
          확인
        </Button>
      </div>
    </StyledInput.MyPageFormWrap>
  );
}

export default MyPageChangePassword;
