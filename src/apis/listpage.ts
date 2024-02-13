import client from './client';

export const getCityGalleryList = async (
  cityId: string,
  order: string,
  pageParam: number,
) => {
  const { data } = await client.get<CityGalleryResponse>(
    `/v1/cities/${cityId}/images?sort=${order},desc&page=${pageParam}&size=18`,
  );
  return data.data;
};

export const getCityShortsList = async (
  cityId: string,
  orderOption: string,
  pageParam: number,
) => {
  const { data } = await client.get<AllShortsResponseType>(
    `/v1/cities/${cityId}/videos?sort=${orderOption},desc&page=${pageParam}&size=6`,
  );
  return data.data;
};

export const getSpotGalleryList = async (
  placeId: string,
  orderOption: string,
  pageParam: number,
) => {
  const { data } = await client.get<SpotGalleryListResponse>(
    `/v1/trip-records-schedules?placeId=${placeId}&page=${pageParam}&size=18&orderBy=${orderOption}`,
  );
  return data.data;
};

export const getSpotList = async (
  placeId: string,
  orderOption: string,
  pageParam: number,
) => {
  const { data } = await client.get<SpotListResponse>(
    `/v1/cities/${placeId}/places?sort=${orderOption},desc&page=${pageParam}&size=7`,
  );
  return data.data;
};

export const getSearchedSpots = async (
  cityId: string,
  placeName: string,
  pageParam: number,
) => {
  const { data } = await client.get<SearchedSpotResponse>(
    `/v1/cities/${cityId}/places?placeName=${placeName}&page=${pageParam}&size=7`,
  );
  return data.data;
};
