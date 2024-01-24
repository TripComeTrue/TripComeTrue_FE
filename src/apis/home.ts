import client from './client';

// 홈 메인 쇼츠 리스트 조회
export const HomeShortsList = async (type?: string) => {
  const res = await client.get(`v1/videos/list?type=${type}`);

  return res.data.data;
};

// 홈 메인 TOP 인기 도시 리스트 조회
export const HomeTopCity = async (type?: string) => {
  const res = await client.get(`v1/cities/top-list?type=${type}`);

  return res.data.data;
};

// 홈 메인 TOP 인기 여행 후기 리스트 조회
export const HomeTopReview = async (type?: string) => {
  const res = await client.get(`v1/trip-records/top-list?type=${type}`);

  return res.data.data;
};
