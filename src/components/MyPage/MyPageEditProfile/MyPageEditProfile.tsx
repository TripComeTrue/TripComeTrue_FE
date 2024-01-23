/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import { GoChevronRight } from 'react-icons/go';
import { isAxiosError } from 'axios';
import { Button, Text } from '@/components/common';
import {
  EditProfileForm,
  MyPageEditProfileProps,
} from './MyPageEditProfile.types';
import MyPageEditImage from './MyPageEditImage';
import * as Styled from './MyPageEditProfile.styles';
import * as StyledInput from '../MyPagePassword/MyPageConfirmPassword.styles';
import {
  getMemberDetail,
  patchIntroduction,
  patchNickname,
} from '@/apis/mypage';

function MyPageEditProfile({
  handleEditProfile,
  image,
  setImage,
}: MyPageEditProfileProps) {
  const { data } = useQuery({
    queryKey: ['member/detail'],
    queryFn: getMemberDetail,
  });
  const nicknameMutate = useMutation({
    mutationKey: ['nickname'],
    mutationFn: patchNickname,
  });
  const introductionMutate = useMutation({
    mutationKey: ['introduction'],
    mutationFn: patchIntroduction,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<EditProfileForm>({
    mode: 'onChange',
    defaultValues: {
      nickname: data?.data.nickname,
      introduction: data?.data.introduction,
    },
  });
  const navigate = useNavigate();
  const onSubmit = handleSubmit(async (formData) => {
    if (formData.nickname !== data?.data.nickname) {
      // 닉네임 값에 변경이 있을 때
      await nicknameMutate.mutate(
        { nickname: formData.nickname },
        {
          onError: (error) => {
            if (isAxiosError(error)) {
              setError('nickname', {
                type: 'invalid-nickname',
                message: error.response?.data.errorMessage,
              });
            }
          },
        },
      );
    }
    if (formData.introduction !== data?.data.introduction) {
      // 소개글 값에 변경이 있을 때
      await introductionMutate.mutate(
        { introduction: formData.introduction },
        {
          onError: (error) => {
            if (isAxiosError(error)) {
              setError('introduction', {
                type: 'invalid-introduction',
                message: error.response?.data.errorMessage,
              });
            }
          },
        },
      );
    }
  });

  return (
    <Styled.MyPageEditProfileWrap onSubmit={onSubmit}>
      <div>
        <MyPageEditImage
          image={data?.data.profileImage}
          newImage={image}
          setImage={setImage}
          handleEditProfile={handleEditProfile}
        />
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
          <label htmlFor="introduction">
            <Text fontSize={12} fontWeight={700}>
              소개글
            </Text>
            <StyledInput.MyPageInput
              type="text"
              id="introduction"
              autoComplete="off"
              placeholder="소개글을 입력해 주세요."
              {...register('introduction', {
                maxLength: {
                  value: 20,
                  message: '소개는 20자 내로 작성해주세요.',
                },
              })}
            />
          </label>
          {errors.introduction && (
            <StyledInput.MyPageError>
              {errors.introduction.message}
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
