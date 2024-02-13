import client from './client';

export const getCityInformation = async (cityId: string) => {
  const { data } = await client.get<CityInfoResponseType>(
    `/v1/cities/${cityId}`,
  );
  return data.data;
};

export const getCityWeather = async (cityId: string) => {
  const { data } = await client.get<WeatherResponseType>(
    `/v1/cities/${cityId}/weathers`,
  );
  return data.data;
};

export const getCityExchangeRate = async (cityId: string) => {
  const { data } = await client.get<ExchangeRateResponseType>(
    `/v1/cities/${cityId}/exchange-rates`,
  );
  return data.data;
};

export const getCityTopReview = async (cityId: string, day: number) => {
  const { data } = await client.get<CityTopReviewResponse>(
    `/v1/trip-records/search?cityId=${cityId}&totalDays=${day}&size=3&sort=storeCount,desc&sort=averageRating,desc`,
  );
  return data.data;
};

export const getCityHotPlace = async (cityId: string) => {
  const { data } = await client.get<HotPlaceResponseType>(
    `/v1/cities/${cityId}/hot-places`,
  );
  return data.data;
};

export const getCityGallery = async (cityId: string) => {
  const { data } = await client.get<CityGalleryResponseType>(
    `/v1/cities/${cityId}/images/list`,
  );
  return data.data;
};

export const getCityShorts = async (cityId: string) => {
  const { data } = await client.get<ShortsResponseType>(
    `/v1/cities/${cityId}/videos/list`,
  );
  return data.data;
};
export const getSpotGallery = async (placeId: string) => {
  const { data } = await client.get<CityGalleryResponse>(
    `/v1/trip-records-schedules?placeId=${placeId}&size=10`,
  );
  return data.data;
};

export const getSpotTopReview = async (placeId: string, day: number) => {
  const { data } = await client.get<SpotTopReviewResponseType>(
    `/v1/trip-records?size=5&page=0&orderBy=storeCount&order=DESC&totalDays=${day}&placeId=${placeId}`,
  );
  return data.data;
};

export const getRecommedSpot = async (placeId: string) => {
  const { data } = await client.get<RecommendSpotResponseType>(
    `/v1/places/${placeId}/nearby`,
  );
  return data.data;
};

export const postStoreSpot = async (placeId: string) => {
  const res = await client.post<SpotInfoDataType>('/v1/places/stores', {
    placeId,
  });

  return res;
};

export const cancelStoreSpot = async (placeId: string) => {
  const res = await client.delete<CancelSpotstore>(
    `/v1/places/${placeId}/stores`,
  );

  return res;
};

export const postStoreCity = async (cityId: string) => {
  const res = await client.post<FetchCityisStoredResponse>(
    '/v1/cities/stores',
    {
      cityId,
    },
  );

  return res;
};

export const cancelStoreCity = async (placeId: string) => {
  const res = await client.delete<FetchCityisStoredResponse>(
    `/v1/cities/${placeId}/stores`,
  );

  return res;
};

export const getSpotInformation = async (spotId: string) => {
  const { data } = await client.get<SpotInfoResponseType>(
    `/v1/places/${spotId}`,
  );
  return data.data;
};

export const getCityStored = async (cityId: string) => {
  const { data } = await client.get<CityisStoredResponse>(
    `/v1/cities/${cityId}/stores`,
  );
  return data.data;
};
