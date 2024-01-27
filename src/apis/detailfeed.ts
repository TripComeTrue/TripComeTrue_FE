import client from './client';

export const getCityGallery = async (cityId: number) => {
  const { data } = await client.get<GalleryResponseType>(
    `/v1/cities/${cityId}/images/list`,
  );
  return data.data;
};
export const getSpotGallery = async (spotId: number) => {
  const { data } = await client.get<CityGalleryResponse>(
    `/v1/trip-records-schedules?placeId=${spotId}&size=10`,
  );
  return data.data;
};
