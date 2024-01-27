import client from './client';

export const getCityGalleryList = async (
  id: number,
  order: string,
  pageParam: number,
) => {
  const { data } = await client.get<CityGalleryResponse>(
    `/v1/cities/${id}/images?sort=${order},desc&page=${pageParam}&size=18`,
  );
  return data.data;
};
