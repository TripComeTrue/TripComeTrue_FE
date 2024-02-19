import client from './client';

export const getSpotInformation = async (spotId: string) => {
  const { data } = await client.get<SpotInfoResponseType>(
    `/v1/places/${spotId}`,
  );
  return data.data;
};
