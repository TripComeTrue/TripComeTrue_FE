import client from './client';

// 여행 후기 관련 API

// 여행 후기 리스트 조회
export const getTripRecords = async (param?: string) => {
  const res = await client.get(`v1/trip-records${param ? `?${param}` : ''}`);

  return res.data;
};

// 여행 후기 세부 조회
export const getTripRecord = async (tripRecordId: string) => {
  const res = await client.get(`v1/trip-records/${tripRecordId}`);

  return res.data;
};

// 특정 여행 후기에 대한 다수의 리뷰 조희
export const getTripRecordReviews = async (tripRecordId: number) => {
  const res = await client.get(`v1/trip-records/${tripRecordId}/reviews`);

  return res;
};

// 1건의 여행 후기 리뷰 조회
export const getTripRecordReview = async (tripRecordReviewId: number) => {
  const res = await client.get(`v1/trip-records/reviews/${tripRecordReviewId}`);

  return res;
};

// 특정 여행 후기에 대해 평가하기
export const postTripRecordReview = async (tripRecordId: number) => {
  const res = await client.post(`v1/trip-records/${tripRecordId}/reviews`);

  return res;
};

// 여행 후기 리뷰 수정하기
export const putTripRecordReview = async (tripRecordReviewId: number) => {
  const res = await client.put(`v1/trip-records/reviews/${tripRecordReviewId}`);

  return res;
};

// 여행 후기 리뷰 삭제하기
export const deleteTripRecordReviews = async () => {
  const res = await client.delete(`v1/trip-records/reviews`);

  return res;
};

// 여행 후기에 대한 모든 댓글 조회
export const getTripRecordComments = async (tripRecordId: number) => {
  const res = await client.get(`v1/trip-records/${tripRecordId}/comments`);

  return res;
};

// 여행 후기에 대한 댓글 작성
export const postTripRecordComment = async (tripRecordId: number) => {
  const res = await client.get(`v1/trip-records/${tripRecordId}/comments`);

  return res;
};

// 여행 후기에 대한 댓글의 대댓글 작성
export const postTripRecordReplyComment = async (
  tripRecordCommentId: number,
) => {
  const res = await client.post(
    `v1/trip-records/comments/${tripRecordCommentId}/reply-comments`,
  );

  return res;
};

// 여행 후기에 대한 댓글 삭제
export const deleteTripRecordComment = async (tripRecordCommentId: number) => {
  const res = await client.delete(
    `v1/trip-records/comments/${tripRecordCommentId}`,
  );

  return res;
};

// 여행 후기에 대한 대댓글 삭제
export const deleteTripRecordReplyComment = async (
  tripRecordReplyCommentId: number,
) => {
  const res = await client.delete(
    `v1/trip-records/reply-comments/${tripRecordReplyCommentId}`,
  );

  return res;
};
