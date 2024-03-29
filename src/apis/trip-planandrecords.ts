import {
  CountryData,
  TripPlanDataForPost,
  TripPlanResBody,
  TripRecordData,
} from '@/@types/trip-alldata.types';
import client from './client';

// 여행 계획 및 후기 작성 페이지 관련 API

// 여행 국가 리스트 전체 조회
export const getTripCountries = async (
  param?: string,
  isOverseas?: boolean,
) => {
  const res = await client.get(
    `v1/country-city${param ? `?continent=${param}` : ''}`,
  );
  let { data } = res.data;

  if (isOverseas && !param) {
    data = data.filter((country: CountryData) => country.continent !== 'KOREA');
  }
  return data;
};

// 여행 도시 리스트 조회
export const getTripCities = async () => {
  const res = await client.get(`v1/country-city`);

  return res.data;
};

// 여행 장소 선택시 param로 사용할 국가 영문명 조회
export const getTripCountryEngName = async (countryNameInKorean: string) => {
  const { data } = await client.get(`v1/country-city`);
  const countries = data.data;

  const matchedCountry = countries.find(
    (country: CountryData) => country.countryName === countryNameInKorean,
  );
  return matchedCountry ? matchedCountry.country : null;
};

// 여행 장소 리스트 조회
export const getTripPlaces = async (countryName: string, cityName: string) => {
  const res = await client.get(
    `v1/search-schedule-places?country=${countryName}&city=${cityName}`,
  );
  return res.data;
};

// 여행 계획 작성 (POST)
export const postTripPlan = async (postData: TripPlanDataForPost) => {
  const res = await client.post('v1/trip-plan', postData);

  return res.data;
};

// 여행 계획 상세조회 (tripPlanId로 조회)
export const getTripPlanById = async (id: number) => {
  const { data } = await client.get<TripPlanResBody>(`v1/trip-plan/${id}`);
  return data;
};

// 여행 계획 기반 후기 작성 페이지 - 한글 국가명 조회
export const getTripCountryKorName = async (countryNameInEnglish: string) => {
  const { data } = await client.get(`v1/country-city`);
  const countries = data.data;

  const matchedCountry = countries.find(
    (country: CountryData) => country.country === countryNameInEnglish,
  );

  return matchedCountry ? matchedCountry.countryName : null;
};

// 여행 계획 후 후기 작성 (POST)
export const postTripPlanRecord = async (postData: TripRecordData) => {
  const res = await client.post('v1/trip-record', postData);

  return res.data;
};

// 여행 계획 복사용 일정 불러오기
export const getTripPlanOfSomeone = async (id: number) => {
  const res = await client.get(`v1/trip-plan/from-trip-record/${id}`);
  return res.data;
};
