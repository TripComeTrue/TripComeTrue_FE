// 여행지 리뷰 관련 API

import client from './client';

// 특정 여행지에 대한 리뷰 작성
export const postPlaceReview = async (
  placeId: string,
  reviewData: { imageUrl: string; content: string },
) => {
  const res = await client.post(`v1/places/${placeId}/reviews`, reviewData);

  return res;
};

// 특정 여행지에 대한 다수의 리뷰 조회
export const getPlaceReviews = async (
  placeId: string,
  sort: string,
  onlyImage: boolean,
) => {
  const { data } = await client.get<{ code: number; data: PlaceReviewsData }>(
    `v1/places/${placeId}/reviews?${
      sort === '추천순' ? 'sort=likeCount' : 'sort=createdAt'
    }&onlyImage=${onlyImage}`,
  );

  return data.data;
};

// 여행지 리뷰들 삭제
export const deletePlaceReviews = async () => {
  const res = await client.get(`v1/places/reviews`);

  return res;
};

// 특정 여행지에 대한 리뷰 수정
export const putPlaceReview = async (
  placeReviewId: string,
  reviewData: { imageUrl: string; content: string },
) => {
  const res = await client.put(
    `v1/places/reviews/${placeReviewId}`,
    reviewData,
  );

  return res;
};

// 특정 여행지에 대한 리뷰 1건 조회
export const getPlaceReview = async (placeReviewId: string) => {
  const { data } = await client.get(`v1/places/reviews/${placeReviewId}`);

  return data.data;
};
