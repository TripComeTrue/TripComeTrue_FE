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
  const { data } = await client.get<SpotGalleryListResponse>(
    `/v1/trip-records-schedules?placeId=${id}&page=${pageParam}&size=18&orderBy=${orderOption}`,
  );
  return data.data;
};

export const getSpotList = async (
  id: number,
  orderOption: string,
  pageParam: number,
) => {
  const { data } = await client.get<SpotListResponse>(
    `/v1/cities/${id}/places?sort=${orderOption},desc&page=${pageParam}&size=7`,
  );
  return data.data;
};

export const getSearchedSpots = async (
  cityId: number,
  placeName: string,
  pageParam: number,
) => {
  const { data } = await client.get<SearchedSpotResponse>(
    `/v1/cities/${cityId}/places?placeName=${placeName}&page=${pageParam}&size=7`,
  );
  return data.data;
};
