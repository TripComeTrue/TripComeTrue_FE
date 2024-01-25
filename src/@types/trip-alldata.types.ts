// 여행 계획 작성
export interface TripPlanData {
  countries: string[];
  tripStartDay: string;
  tripEndDay: string;
  referencedBy: number | null;
  tripPlanSchedules: TripPlanSchedule[];
  tripPlanCities?: string[]; // 국가+도시 형태 이름 저장시 사용하는 임시 데이터
}

export interface TripPlanSchedule {
  dayNumber: number;
  orderNumber: number;
  placeId: number;
  content: string;
  tagType: string;
  tagUrl: string;
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
  tagType: string;
  tagUrl: string;
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
