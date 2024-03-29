import axios, { AxiosInstance } from 'axios';
import { FIELD_MASK_OPTIONS } from '@/constants/DetailFeed/Map';
import GOOGLE_MAPS from '@/constants/map';
import client from './client';

export const googleMapinstance: AxiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'X-Goog-Api-Key': GOOGLE_MAPS,
    'X-Goog-FieldMask': FIELD_MASK_OPTIONS,
  },
});

export const getCityLoaction = async (cityName: string) => {
  const { data } = await googleMapinstance.post<PlacesDataType>(
    'https://places.googleapis.com/v1/places:searchText',
    { textQuery: cityName },
  );
  return data;
};

export const getSpotsLocation = async (cityId: string) => {
  const { data } = await client.get<SpotsInCityResponse>(
    `/v1/cities/${cityId}/places/list`,
  );

  return data.data;
};

export const getSearchSpotsLocation = async (
  category: string,
  center: { lat: number; lng: number },
) => {
  const { data } = await googleMapinstance.post<PlacesDataType>(
    'https://places.googleapis.com/v1/places:searchNearby',
    {
      includedTypes: [category],
      languageCode: 'ko',
      maxResultCount: 20,
      rankPreference: 'POPULARITY',
      locationRestriction: {
        circle: {
          center: {
            latitude: center.lat,
            longitude: center.lng,
          },
          radius: 5000.0,
        },
      },
    },
  );
  return data.places;
};
