interface ShortsDataType {
  id: number;
  tripRecordId: number;
  tripRecordTitle: string;
  videoUrl: string;
  storedCount: number;
}

interface ShortsResponseType {
  code: 200;
  data: ShortsDataType[];
  errorMessage: null;
}

interface GalleryDataType {
  id: number;
  tripRecordId: number;
  storedCount: number;
  imageUrl: string;
}

interface GallryResponseType {
  code: 200;
  data: GalleryDataType[];
  errorMessage: null;
}

interface CityInfoDataType {
  id: number;
  name: string;
  language: string;
  timeDifference: string;
  voltage: string;
  visa: string;
  curUnit: string;
  curName: string;
}

interface CityInfoResponseType {
  code: 200;
  data: CityInfoDataType;
  errorMessage: null;
}

interface WeatherDataType {
  month: number;
  maxAvgTempC: number;
  minAvgTempC: number;
  maxAvgTempF: number;
  minAvgTempF: number;
}

interface WeatherResponseType {
  code: 200;
  data: WeatherDataType[];
  errorMessage: null;
}

interface HotPlaceDataType {
  placeId: number;
  placeName: string;
  storedCount: number;
  commentTotal: number;
  imageUrl: string;
}

interface HotPlaceResponseType {
  code: 200;
  data: HotPlaceDataType[];
  errorMessage: null;
}

interface ExchangeRateResponseType {
  code: 200;
  data: {
    curUnit: string;
    curName: string;
    exchangeRate: string;
  };
  errorMessage: null;
}
