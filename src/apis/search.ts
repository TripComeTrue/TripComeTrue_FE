import client from './client';

export const SearchCityInfo = async (cityName?: string) => {
  const res = await client.get(`v1/cities?name=${cityName}`);

  return res.data.data;
};
