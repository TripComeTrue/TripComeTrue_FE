export interface ShortsDataType {
  id: number;
  tripRecordId: number;
  tripRecordTitle: string;
  videoUrl: string;
  storedCount: number;
}

export interface DetailFeedShortsProps {
  ShortData: ShortsDataType[];
}

export interface GallryDataType {
  id: number;
  tripRecordId: number;
  storedCount: number;
  imageUrl: string;
}

export interface GalleryProps {
  GalleryData: GallryDataType[];
}

export interface CityInfoDataType {
  id: number;
  name: string;
  language: string;
  timeDifference: string;
  voltage: string;
  visa: string;
  curUnit: string;
  curName: string;
}

export interface WeatherDataType {
  month: number;
  maxAvgTempC: number;
  minAvgTempC: number;
  maxAvgTempF: number;
  minAvgTempF: number;
}

export interface WeatherProps {
  weatherData: WeatherDataType[];
}

export interface HotPlaceDataType {
  placeId: number;
  placeName: string;
  storedCount: number;
  commentTotal: number;
  imageUrl: string;
}

export interface HotPlaceProps {
  hotPlaceData: HotPlaceDataType[];
}

export interface ExchangeRateProps {
  currencyUnit: string;
  currencyName: string;
  exchangeRate: string;
}

// 리뷰 api 미완성
