import client from './client';
import { PostData } from '@/components/common/Spots/Spots.types';
import {
  CheckPasswordReqBody,
  CityStoresResBody,
  IntroductionReqBody,
  IntroductionResBody,
  MemberDetailResBody,
  MyTripRecordReviewResBody,
  NicknameReqBody,
  NicknameResBody,
  Notification,
  PlaceReviewDelReqBody,
  PlaceReviewResBody,
  PlacesStoresResBody,
  PlanResBody,
  ProfileImageBody,
  RecordReviewDelReqBody,
  TripRecordResBody,
  TripStoresResBody,
  WishListDelReqBody,
} from '@/@types/mypage.types';

// const serverUrl = 'http://tripcometrue.site'; // 추후 환경변수로 설정 필요

export const getMyPlan = async (page: number) => {
  const { data } = await client.get<PlanResBody>(
    `/v1/trip-plan/my?page=${page}&size=4`,
  );
  return data;
};

export const getMyReview = async (page: number) => {
  const { data } = await client.get<TripRecordResBody>(
    `/v1/trip-records/my?page=${page}&size=4`,
  );
  return data;
};

export const getMyPlaceReview = async (page: number) => {
  const { data } = await client.get<PlaceReviewResBody>(
    `/v1/places/reviews/my?page=${page}&size=4`,
  );
  return data;
};

export const getMyTripRecordReview = async (page: number) => {
  const { data } = await client.get<MyTripRecordReviewResBody>(
    `/v1/trip-records/reviews/my?page=${page}&size=4`,
  );
  return data;
};

export const getNoties = async () => {
  const { data } = await client.get<{ message: string; data: Notification[] }>(
    '/mypage/noti',
  );
  return data;
};

export const getWishList = async () => {
  const { data } = await client.get<{
    message: string;
    data: { trip: PostData[]; city: PostData[]; location: PostData[] };
  }>(`/mypage/wishlist`);
  return data;
};

// 보관 도시 리스트
export const getCityStores = async () => {
  const { data } = await client.get<CityStoresResBody>(`/v1/cities/stores`);
  return data;
};

export const getPlacesStores = async () => {
  const { data } = await client.get<PlacesStoresResBody>(`/v1/places/stores`);
  return data;
};

export const getTripStores = async () => {
  const { data } = await client.get<TripStoresResBody>(
    `/v1/trip-records/stores`,
  );
  return data;
};

export const getWishListMore = async (type: string) => {
  const { data } = await client.get(`/v1/${type}/stores`);
  const moreData = data.data.content.map(
    (item: {
      id: number;
      imageUrl: string;
      storeCount: number;
      storedCount: number;
      commentCount: number;
      name: string;
      title: string;
    }) => ({
      id: item.id,
      imageUrl: item.imageUrl ?? '',
      tripRecordTitle: item.name || item.title,
      storedCount: item.storeCount || item.storedCount,
      reviews: item.commentCount,
    }),
  );
  return moreData as PostData[];
};

// 비밀번호 변경, 확인 api
export const postCheckPassword = async (reqBody: CheckPasswordReqBody) => {
  const { status } = await client.post(`/v1/member/check-password`, {
    newPassword: reqBody.newPassword,
    confirmPassword: reqBody.confirmPassword,
  });
  return status;
};

export const patchChangePassword = async (reqBody: CheckPasswordReqBody) => {
  const { status } = await client.patch(`/v1/member/change-password`, {
    newPassword: reqBody.newPassword,
    confirmPassword: reqBody.confirmPassword,
  });
  return status;
};

// 닉네임, 소개글 변경 api
export const patchIntroduction = async (reqBody: IntroductionReqBody) => {
  const { data } = await client.patch<IntroductionResBody>(
    `/v1/member/introduction`,
    {
      introduction: reqBody.introduction,
    },
  );
  return data;
};

export const patchNickname = async (reqBody: NicknameReqBody) => {
  const { data } = await client.patch<NicknameResBody>(`/v1/member/nickname`, {
    nickname: reqBody.nickname,
  });
  return data;
};

export const patchProfileImage = async (imageUrl: string) => {
  const { data } = await client.patch<ProfileImageBody>(
    `/v1/member/profile-image`,
    {
      profile_image: imageUrl,
    },
  );
  return data;
};

// 내정보 조회
export const getMemberDetail = async () => {
  const { data } = await client.get<MemberDetailResBody>(`/v1/member/details`);
  return data;
};

// 회원탈퇴
export const deleteMember = async () => {
  const { status } = await client.delete(`/v1/member`);
  return status;
};

// 내 여행계획 삭제
export const deleteMyTripPlan = async (id: number) => {
  const { status } = await client.delete(`/v1/trip-plan/${id}`);
  return status;
};

// 내 여행후기 삭제
export const deleteMyTripRecord = async (id: number) => {
  const { status } = await client.delete(`/v1/trip-record/${id}`);
  return status;
};

// 내 여행지 리뷰 삭제
export const deleteMyPlaceReview = async (reqBody: PlaceReviewDelReqBody) => {
  const { status } = await client.delete(`/v1/places/reviews`, {
    data: reqBody,
  });
  return status;
};

// 내 여행지 리뷰 삭제
export const deleteMyRecordReview = async (reqBody: RecordReviewDelReqBody) => {
  const { status } = await client.delete(`/v1/trip-records/reviews`, {
    data: reqBody,
  });
  return status;
};

// 보관하기 취소
export const deleteWishList = async (reqBody: WishListDelReqBody) => {
  const { status } = await client.delete(
    `/v1/${reqBody.type}/${reqBody.id}/stores`,
  );
  return { status, type: reqBody.type, id: reqBody.id };
};
