import client from './client';

export const SearchCityInfo = async (cityName?: string) => {
  const res = await client.get(`v1/cities?name=${cityName}`);

  return res.data.data;
};

export const SearchSpotInfo = async (placeName?: string) => {
  const res = await client.get(`v1/places/search?placeName=${placeName}`);

  return res.data.data;
};

export const SearchCreatorInfo = async (query?: string) => {
  const res = await client.get(`v1/members/list?query=${query}`);

  return res.data.data;
};

// 검색된 크리에이터 '더보기' 조회
export const SearchCreatorsInfiniteInfo = async (
  query?: string,
  page?: number,
  size?: number,
) => {
  const res = await client.get(
    `v1/members?query=${query}&page=${page}&size=${size}`,
  );

  return res.data;
};

// 홈 크리에이터 프로필 조회
export const SearchCreatorProfile = async (memberId: number) => {
  const res = await client.get(`/v1/members/${memberId}`);

  return res.data.data;
};

// 여행 경비 검색 여행 후기 리스트 조회
export const SearchExpenseRanges = async (
  expenseRangeType: string,
  pageNum: number,
) => {
  const res = await client.get(
    `/v1/trip-records/search/expense-ranges?expenseRangeType=${expenseRangeType}&page=${pageNum}`,
  );

  return res.data.data;
};
