/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
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
import { patchIntroduction, patchNickname } from '@/apis/mypage';

function MyPageEditProfile({
  data,
  refetch,
  handleOpen,
  image,
  setImage,
}: MyPageEditProfileProps) {
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
      nickname: data.nickname,
      introduction: data.introduction,
    },
  });

  // 닉네임 mutate option
  const nicknameOption = {
    onError: (error: Error) => {
      if (isAxiosError(error)) {
        setError('nickname', {
          type: 'invalid-nickname',
          message: error.response?.data.errorMessage,
        });
      }
    },
  };
  // 소개글 mutate option
  const introductionOption = {
    onError: (error: Error) => {
      if (isAxiosError(error)) {
        setError('introduction', {
          type: 'invalid-introduction',
          message: error.response?.data.errorMessage,
        });
      }
    },
  };
  const navigate = useNavigate();
  const onSubmit = handleSubmit(async (formData) => {
    if (
      formData.introduction === data.introduction &&
      formData.nickname !== data.nickname
    ) {
      // 닉네임 값에만 변경이 있을 때
      nicknameMutate.mutate({ nickname: formData.nickname }, nicknameOption);
      navigate('/mypage');
    }
    if (
      formData.nickname === data.nickname &&
      formData.introduction !== data.introduction
    ) {
      // 소개글 값에만 변경이 있을 때
      introductionMutate.mutate(
        { introduction: formData.introduction },
        introductionOption,
      );
      navigate('/mypage');
    }
    if (
      formData.nickname !== data.nickname &&
      formData.introduction !== data.introduction
    ) {
      // 둘 다 변경이 있을 때
      const nicknameRes = await nicknameMutate.mutateAsync(
        { nickname: formData.nickname },
        nicknameOption,
      );
      const introRes = await introductionMutate.mutateAsync(
        { introduction: formData.introduction },
        introductionOption,
      );
      if (nicknameRes.code === 200 && introRes.code === 200) {
        navigate('/mypage');
      }
    }
    refetch();
  });

  return (
    <Styled.MyPageEditProfileWrap onSubmit={onSubmit}>
      <div>
        <MyPageEditImage
          image={data.profileImage}
          newImage={image}
          setImage={setImage}
          handleOpen={handleOpen}
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
