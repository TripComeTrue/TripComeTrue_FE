export interface DetailFeedShortsProps {
  ShortData: ShortsDataType[];
}

export interface GalleryProps {
  GalleryData: GalleryDataType[];
}

export interface CityInfoProps {
  cityInformation: CityInfoDataType;
}
export interface WeatherProps {
  weatherData: WeatherDataType[];
}

export interface HotPlaceProps {
  hotPlaceData: HotPlaceDataType[];
}

export interface ExchangeRateType {
  curUnit: string;
  curName: string;
  exchangeRate: string;
}

// 리뷰 api 미완성
