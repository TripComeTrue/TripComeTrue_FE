import client from './client';

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
