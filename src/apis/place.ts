// 여행지 리뷰 관련 API

import client from './client';

// 특정 여행지에 대한 리뷰 작성
export const postPlaceReview = (
  placeId: string,
  reviewData: { imageUrl: string; content: string },
) =>
  client.post<Response<PlaceReviewData>>(
    `v1/places/${placeId}/reviews`,
    reviewData,
  );

// 특정 여행지에 대한 다수의 리뷰 조회
export const getPlaceReviews = async ({
  placeId,
  sort = '최신순',
  onlyImage = false,
  pageParam = 0,
  size = 2,
}: {
  placeId: string;
  sort?: string;
  onlyImage?: boolean;
  pageParam?: number;
  size?: number;
}) => {
  const { data } = await client.get<Response<PlaceReviewsData>>(
    `v1/places/${placeId}/reviews?page=${pageParam}&size=${size}&${
      sort === '추천순' ? 'sort=likeCount' : 'sort=createdAt'
    },desc&onlyImage=${onlyImage}`,
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
  const { data } = await client.get<Response<PlaceReviewData>>(
    `v1/places/reviews/${placeReviewId}`,
  );

  return data.data;
};

// 여행지 리뷰에 대한 댓글 작성
export const postPlaceReviewComment = async (
  placeReviewId: string,
  commentData: { content: string },
) => {
  const { data } = await client.post(
    `v1/places/reviews/${placeReviewId}/comments`,
    commentData,
  );

  return data.data;
};

// 여행지 리뷰의 댓글에 대한 대댓글 작성
export const postPlaceReviewReply = async (
  placeReviewCommentId: number,
  replyData: { content: string },
) => {
  const { data } = await client.post(
    `v1/places/reviews/comments/${placeReviewCommentId}/reply-comments`,
    replyData,
  );

  return data.data;
};

// 여행지 리뷰에 대한 댓글, 대댓글 삭제
export const deletePlaceReviewComment = async (deleteCommentId: number) => {
  await client.delete(`v1/places/reviews/comments/${deleteCommentId}`);
};

// 여행지 리뷰 좋아요 요청
export const postLike = async (placeReviewId: number) => {
  await client.post(`v1/places/reviews/${placeReviewId}/likes`);
};

// 여행지 리뷰 좋아요 취소
export const deleteLike = async (placeReviewId: number) => {
  await client.delete(`v1/places/reviews/${placeReviewId}/likes`);
};
