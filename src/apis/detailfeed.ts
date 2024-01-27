import client from './client';

export const getCityGallery = async (cityId: number) => {
  const { data } = await client.get<CityGalleryResponseType>(
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

export const postStoreSpot = async (placeId: number) => {
  const res = await client.post<SpotInfoDataType>('/v1/places/stores', {
    placeId,
  });

  return res;
};

export const cancelStoreSpot = async (placeId: number) => {
  const res = await client.delete<CancleSpotstore>(
    `/v1/places/${placeId}/stores`,
  );

  return res;
};

export const postStoreCity = async (cityId: number) => {
  const res = await client.post<FetchCityisStoredResponse>(
    '/v1/cities/stores',
    {
      cityId,
    },
  );

  return res;
};

export const cancelStoreCity = async (placeId: number) => {
  const res = await client.delete<FetchCityisStoredResponse>(
    `/v1/cities/${placeId}/stores`,
  );

  return res;
};

export const getSpotInformation = async (spotId: number) => {
  const { data } = await client.get<SpotInfoResponseType>(
    `/v1/places/${spotId}`,
  );
  return data.data;
};

export const getCityStored = async (cityId: number) => {
  const { data } = await client.get<CityisStoredResponse>(
    `/v1/cities/${cityId}/stores`,
  );
  return data.data;
};
