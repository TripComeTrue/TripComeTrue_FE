import axios, { AxiosInstance } from 'axios';
import { FIELD_MASK_OPTIONS } from '@/constants/DetailFeed/Map';
import GOOGLE_MAPS from '@/constants/map';
import client from './client';

export const GOOGLE_MAPS_API_KEY = GOOGLE_MAPS;
export const googleMapinstance: AxiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'X-Goog-Api-Key': GOOGLE_MAPS_API_KEY,
    'X-Goog-FieldMask': FIELD_MASK_OPTIONS,
  },
});

export const getCityLoaction = async (cityName: string) => {
  const { data } = await googleMapinstance.post<PlacesDataType>(
    'https://places.googleapis.com/v1/places:searchText',
    { textQuery: cityName },
  );
  console.log(data.places);
  return data;
};

export const getSpotsLocation = async (cityId: number) => {
  const { data } = await client.get<SpotsInCityResponse>(
    `/v1/cities/${cityId}/places/list`,
  );

  return data.data;
};

export const getSearchgSpotsLocation = async (
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
