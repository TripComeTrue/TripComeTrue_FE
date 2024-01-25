import client from './client';

// 여행 후기 관련 API

// 여행 후기 리스트 조회
export const getTripRecords = async (param?: string) => {
  const { data } = await client.get(
    `v1/trip-records${param ? `?${param}` : ''}`,
  );

  return data.data;
};

// 여행 후기 쇼츠 리스트 조회
export const getHotShorts = async () => {
  const { data } = await client.get(`v1/trip-records/hot-shorts-list`);

  return data.data;
};

// 여행 후기 세부 조회
export const getTripRecord = async (tripRecordId: string) => {
  const { data } = await client.get(`v1/trip-records/${tripRecordId}`);

  return data.data;
};

// 가장 최신 여행 후기 리뷰 1건 + 내 평점 조회
export const getTripRecordLatestReview = async (tripRecordId: string) => {
  const { data } = await client.get(
    `v1/trip-records/${tripRecordId}/reviews/latest`,
  );

  return data.data;
};

// 특정 여행 후기에 대한 다수의 리뷰 조희
export const getTripRecordReviews = async (tripRecordId: number) => {
  const res = await client.get(`v1/trip-records/${tripRecordId}/reviews`);

  return res;
};

// 1건의 여행 후기 리뷰 조회
export const getTripRecordReview = async (tripRecordReviewId: string) => {
  const { data } = await client.get(
    `v1/trip-records/reviews/${tripRecordReviewId}`,
  );

  return data.data;
};

// 특정 여행 후기에 대해 평가하기
export const postTripRecordReview = async (
  tripRecordId: string,
  ratingScore: number,
) => {
  const { data } = await client.post(
    `v1/trip-records/${tripRecordId}/reviews`,
    {
      ratingScore,
    },
  );

  return data.data;
};

// 여행 후기 리뷰(본문 + 이미지) 등록
export const putTripRecordReviewContent = async (
  tripRecordReviewId: string,
  reviewData: { imageUrl: string; content: string },
) => {
  const { data } = await client.put(
    `v1/trip-records/reviews/${tripRecordReviewId}/contents`,
    reviewData,
  );

  return data.data;
};

// 여행 후기 리뷰 수정하기
export const putTripRecordReview = async (
  tripRecordReviewId: string,
  reviewData: { imageUrl: string; content: string; ratingScore: number },
) => {
  const res = await client.put(
    `v1/trip-records/reviews/${tripRecordReviewId}`,
    reviewData,
  );

  return res;
};

// 여행 후기 리뷰 삭제하기
export const deleteTripRecordReviews = async () => {
  const res = await client.delete(`v1/trip-records/reviews`);

  return res;
};

// 여행 후기에 대한 모든 댓글 조회
export const getTripRecordComments = async (tripRecordId: string) => {
  const { data } = await client.get(`v1/trip-records/${tripRecordId}/comments`);

  return data.data;
};

// 여행 후기에 대한 댓글 작성
export const postTripRecordComment = async (
  tripRecordId: string,
  commentData: { content: string },
) => {
  await client.post(`v1/trip-records/${tripRecordId}/comments`, commentData);
};

// 여행 후기에 대한 댓글의 대댓글 작성
export const postTripRecordReply = async (
  tripRecordCommentId: number,
  replyData: { content: string },
) => {
  const res = await client.post(
    `v1/trip-records/comments/${tripRecordCommentId}/reply-comments`,
    replyData,
  );

  return res;
};

// 여행 후기에 대한 댓글, 대댓글 삭제
export const deleteTripRecordComment = async (deleteCommentId: number) => {
  const res = await client.delete(
    `v1/trip-records/comments/${deleteCommentId}`,
  );

  return res;
};
