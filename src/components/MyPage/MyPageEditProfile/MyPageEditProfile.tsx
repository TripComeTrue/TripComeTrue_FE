/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { GoChevronRight } from 'react-icons/go';
import { Button, Text } from '@/components/common';
import { EditProfileForm } from './MyPageEditProfile.types';
import MyPageEditImage from './MyPageEditImage';
import * as Styled from './MyPageEditProfile.styles';
import * as StyledInput from '../MyPagePassword/MyPageConfirmPassword.styles';

function MyPageEditProfile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditProfileForm>({
    defaultValues: {
      nickname: '',
      description: '',
    },
  });
  const navigate = useNavigate();
  const onSubmit = handleSubmit((formData) => {
    console.log(formData);
    navigate('/mypage/edit-profile');
  });

  return (
    <Styled.MyPageEditProfileWrap onSubmit={onSubmit}>
      <div>
        <MyPageEditImage />
        <Styled.MyPageEditInputWrap>
          <label htmlFor="nickname">
            <Text fontSize={12} fontWeight={700}>
              크리에이터 명
            </Text>
            <StyledInput.MyPageInput
              type="text"
              id="nickname"
              autoComplete="off"
              placeholder="크리에이터명을 입력해 주세요."
              {...register('nickname')}
            />
          </label>
          {errors.nickname && (
            <StyledInput.MyPageError>
              {errors.nickname.message}
            </StyledInput.MyPageError>
          )}
        </Styled.MyPageEditInputWrap>
        <Styled.MyPageEditInputWrap>
          <label htmlFor="description">
            <Text fontSize={12} fontWeight={700}>
              소개글
            </Text>
            <StyledInput.MyPageInput
              type="text"
              id="description"
              autoComplete="off"
              placeholder="소개글을 입력해 주세요."
              {...register('description')}
            />
          </label>
          {errors.nickname && (
            <StyledInput.MyPageError>
              {errors.nickname.message}
            </StyledInput.MyPageError>
          )}
        </Styled.MyPageEditInputWrap>
        <Styled.MyPageEditLinkWrap>
          <div>
            <Styled.MyPageEditPasswordLink to="/mypage/change-password">
              <Text fontSize={14}>비밀번호 변경</Text> <GoChevronRight />
            </Styled.MyPageEditPasswordLink>
          </div>
          <div>
            <Styled.MyPageEditDeleteUserBtn type="button">
              회원탈퇴
            </Styled.MyPageEditDeleteUserBtn>
          </div>
        </Styled.MyPageEditLinkWrap>
      </div>
      <div>
        <Button size="lg" variants="primary" type="submit">
          수정 완료
        </Button>
      </div>
    </Styled.MyPageEditProfileWrap>
  );
}

export default MyPageEditProfile;
