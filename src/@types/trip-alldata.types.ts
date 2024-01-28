// 여행 계획 작성
export interface TripPlanData {
  countries: string[];
  tripStartDay: string;
  tripEndDay: string;
  referencedBy: number | null;
  tripPlanSchedules: TripPlanSchedule[];
  tripPlanCountriesEng?: string[]; // 장소 데이터 조회시 params에 사용될 영문 국가명
  tripPlanCities?: string[]; // 국가+도시 형태 이름 저장시 사용하는 임시 데이터
}

export interface TripPlanSchedule {
  dayNumber: number;
  orderNumber: number;
  placeId: number | null;
  content: string;
  tagType: string;
  tagUrl: string;
}

// 여행 계획 작성 POST시 사용 (countries만 단일 string 적용)
export type TripPlanDataForPost = Omit<TripPlanData, 'countries'> & {
  countries: string;
};

// 여행 계획 선택 후 후기 작성을 위해 받아온 데이터
export interface TripPlanResBody {
  code: number;
  data: TripPlanResData;
}

export interface TripPlanResData {
  countries: string;
  tripStartDay: number[];
  tripEndDay: number[];
  tripPlanSchedules: TripPlanScheduleItem[];
}

export type TripPlanScheduleItem = TripPlanSchedule & {
  latitude: number;
  longitude: number;
  country: string;
  cityName: string;
  placeName: string;
};

/* 최종 단계에서 계획 작성시 불러올 선택된 도시 리스트 */
export interface TripPlanCities {
  cities: string[];
}

// 여행 계획 작성시 기본 값
export const defaultTripPlanData: TripPlanData = {
  countries: [],
  tripStartDay: '',
  tripEndDay: '',
  referencedBy: null,
  tripPlanSchedules: [],
};

// 여행후기 작성 및 수정
export interface TripRecordData {
  tripRecordImages: TripRecordImage[];
  title: string;
  content: string;
  expenseRangeType: string;
  hashTags: string[];
  countries: string;
  tripStartDay: string;
  tripEndDay: string;
  tripRecordSchedules: TripRecordSchedule[];
}

export interface TripRecordImage {
  imageUrl: string;
  tagType: string | null;
  tagUrl: string | null;
}

export interface TripRecordSchedule {
  dayNumber: number;
  orderNumber: number;
  placeId: number;
  content: string;
  tripRecordScheduleImages: string[];
  tripRecordScheduleVideos: string[];
  tagType: string;
  tagUrl: string;
}

// 여행후기 작성 및 수정시 기본 값
export const defaultTripRecordData: TripRecordData = {
  tripRecordImages: [],
  title: '',
  content: '',
  expenseRangeType: '',
  hashTags: [],
  countries: '',
  tripStartDay: '',
  tripEndDay: '',
  tripRecordSchedules: [],
};

// 여행 국가 조회
export interface CountryData {
  continent: string;
  country: string;
  countryName: string;
  countryImageUrl: string;
  cityList: City[];
}

export interface CountryResponse {
  code: number;
  data: CountryData[];
}

// 여행 도시 조회
export interface City {
  cityId: number;
  cityName: string;
  cityImageUrl: string;
}

// 스케줄에 등록할 장소 검색
export interface Place {
  placeId: number;
  address: string;
  name: string;
}

export interface PlaceResponse {
  code: number;
  data: Place[];
}

// 스케줄에 등록할 장소 직접 생성
export interface NewPlace {
  address: string;
  name: string;
  latitude: number;
  longitude: number;
  country: string;
  cityname: string;
}

export interface NewPlaceResponse {
  code: number;
  data: number; // placeId
}

// 여행 계획 복사시 받아오는 여행 계획 데이터
export interface TripPlanOfSomeoneRes {
  code: number;
  data: TripPlanOfSomeone[];
}
export interface TripPlanOfSomeone {
  countries: string;
  tripStartDay: number[];
  tripEndDay: number[];
  tripSchedules: TripPlanOfSomeoneSchedule[];
}

export interface TripPlanOfSomeoneSchedule {
  latitude: number;
  longitude: number;
  country: string;
  cityName: string;
  placeName: string;
  dayNumber: number;
  orderNumber: number;
  placeId: number;
  content: string;
  tagType?: string;
  tagUrl?: string;
}
