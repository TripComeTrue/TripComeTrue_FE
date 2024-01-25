import client from './client';

export const getSpotInformation = async (placeId: number) => {
  const { data } = await client.get<SpotInfoResponseType>(`/places/${placeId}`);
  return data.data;
};

export const getSpotMapInformation = async (placeId: number) => {
  const { data } = await client.get<SpotMapResponseType>(
    `/places/${placeId}/maplist`,
  );
  return data.data;
};
