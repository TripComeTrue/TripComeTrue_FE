import client from './client';

// 여행 후기 관련 API

// 여행 후기 리스트 조회
export const getTripRecords = async ({
  pageParam = 0,
  size = 5,
  filter,
}: {
  pageParam?: number;
  size?: number;
  filter?: string;
} = {}) => {
  const { data } = await client.get<Response<TripRecordData[]>>(
    `v1/trip-records?page=${pageParam}&size=${size}${filter ? `&${filter}` : ''}`,
  );

  return data.data;
};

// 여행 후기 세부 조회
export const getTripRecordDetail = async (tripRecordId: string) => {
  const { data } = await client.get<Response<TripRecordDetailData>>(
    `v1/trip-records/${tripRecordId}`,
  );

  return data.data;
};

// 가장 최신 여행 후기 리뷰 1건 + 내 평점 조회
export const getTripRecordLatestReview = async (tripRecordId: string) => {
  const { data } = await client.get<Response<TripRecordLatestReviewData>>(
    `v1/trip-records/${tripRecordId}/reviews/latest`,
  );

  return data.data;
};

// 1건의 여행 후기 리뷰 조회
export const getTripRecordReview = async (tripRecordReviewId: string) => {
  const { data } = await client.get<Response<TripRecordReviewData>>(
    `v1/trip-records/reviews/${tripRecordReviewId}`,
  );

  return data.data;
};

// 특정 여행 후기에 대해 평가하기
export const postTripRecordReview = async (
  tripRecordId: string,
  ratingScore: number,
) => {
  const { data } = await client.post<Response<PostTripRecordReviewData>>(
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
  await client.put(
    `v1/trip-records/reviews/${tripRecordReviewId}/contents`,
    reviewData,
  );
};

// 여행 후기 리뷰 수정하기
export const putTripRecordReview = async (
  tripRecordReviewId: string,
  reviewData: { imageUrl: string; content: string; ratingScore: number },
) => {
  await client.put(`v1/trip-records/reviews/${tripRecordReviewId}`, reviewData);
};

// 여행 후기 리뷰 삭제하기
export const deleteTripRecordReviews = async () => {
  await client.delete(`v1/trip-records/reviews`);
};

// 여행 후기에 대한 모든 댓글 조회
export const getTripRecordComments = async (
  tripRecordId: string,
  pageParams: number,
) => {
  const { data } = await client.get<Response<TripRecordCommentsData>>(
    `v1/trip-records/${tripRecordId}/comments?page=${pageParams}&size=5`,
  );

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
  await client.post(
    `v1/trip-records/comments/${tripRecordCommentId}/reply-comments`,
    replyData,
  );
};

// 여행 후기에 대한 댓글, 대댓글 삭제
export const deleteTripRecordComment = async (deleteCommentId: number) => {
  await client.delete(`v1/trip-records/comments/${deleteCommentId}`);
};

// 여행 후기 보관 요청
export const postStore = async (tripRecordId: string) => {
  await client.post(`v1/trip-records/stores`, { tripRecordId });
};

// 여행 후기 보관 취소
export const deleteStore = async (tripRecordId: string) => {
  await client.delete(`v1/trip-records/${tripRecordId}/stores`);
};
