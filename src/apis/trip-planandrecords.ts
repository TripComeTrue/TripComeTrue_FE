import client from './client';

// 여행 계획 및 후기 작성 페이지 관련 API

// 여행 국가 리스트 전체 조회
export const getTripCountries = async (param?: string) => {
  const data = await client.get(
    `v1/country-city${param ? `?continent=${param}` : ''}`,
  );
  return data.data;
};

// 여행 후기 쇼츠 리스트 조회
export const getHotShorts = async () => {
  const res = await client.get(`v1/trip-records/hot-shorts-list`);

  return res.data;
};
