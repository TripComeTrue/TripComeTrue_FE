import client from './client';

export const getCityShorts = async (cityId: number) => {
  const { data } = await client.get<ShortsResponseType>(
    `/cities/${cityId}/videos/list`,
  );
  return data.data;
};

export const getCityGallery = async (cityId: number) => {
  const { data } = await client.get<GallryResponseType>(
    `/cities/${cityId}/images/list`,
  );
  return data.data;
};

export const getCityInfo = async (cityId: number) => {
  const { data } = await client.get<CityInfoResponseType>(`/cities/${cityId}`);

  return data.data;
};

export const getCityWeather = async (cityId: number) => {
  const { data } = await client.get<WeatherResponseType>(
    `/cities/${cityId}/weathers`,
  );
  return data.data;
};

export const getCityHotPlace = async (cityId: number) => {
  const { data } = await client.get<HotPlaceResponseType>(
    `/cities/${cityId}/hot-places`,
  );
  return data.data;
};

export const getExchangeRate = async (currencyUnit: string) => {
  const { data } = await client.get<ExchangeRateResponseType>(
    `/cities/exchange-rates?curUnit=${currencyUnit}`,
  );
  return data.data;
};
