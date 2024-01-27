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

export const getCityShortsList = async (
  id: number,
  orderOption: string,
  pageParam: number,
) => {
  const { data } = await client.get<AllShortsResponseType>(
    `/v1/cities/${id}/videos?sort=${orderOption},desc&page=${pageParam}&size=6`,
  );
  return data.data;
};

export const getSpotGalleryList = async (
  id: number,
  orderOption: string,
  pageParam: number,
) => {
  const { data } = await client.get<SpotGalleyListResponse>(
    `/v1/trip-records-schedules?placeId=${id}&page=${pageParam}&size=18&orderBy=${orderOption}`,
  );
  console.log(data);
  return data.data;
};
