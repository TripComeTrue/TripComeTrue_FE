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

  return res.data;
};
