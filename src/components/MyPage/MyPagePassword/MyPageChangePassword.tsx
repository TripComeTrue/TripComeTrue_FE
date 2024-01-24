/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button, Text } from '@/components/common';
import { passwordValiation } from '@/constants/Auth/validations';
import { ChangePasswordForm } from './MyPageChangePassword.types';
import * as StyledInput from './MyPageConfirmPassword.styles';
import MyPageChangePasswordInputWrap from './MyPageChangePassword.styles';

function MyPageChangePassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<ChangePasswordForm>({
    defaultValues: {
      newPassword: '',
      newPasswordCheck: '',
    },
  });
  const navigate = useNavigate();
  const onSubmit = handleSubmit((formData) => {
    console.log(formData);
    navigate('/mypage');
  });

  const { newPassword } = getValues();

  const passwordValiation2 = {
    ...passwordValiation,
    validate: {
      matchPassword: (value: string | undefined) => {
        return newPassword === value || '비밀번호가 일치하지 않습니다';
      },
    },
  };

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
