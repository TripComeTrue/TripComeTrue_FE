interface ShortsDataType {
  videoId: number;
  tripRecordId: number;
  tripRecordTitle: string;
  videoUrl: string;
  storeCount: number;
  storedCount: number;
  memberId: number;
  memberName: string;
  profileImageUrl: string;
  thumbnailUrl: string;
}

interface ShortsResponseType {
  code: 200;
  data: ShortsDataType[];
  errorMessage: null;
}

interface AllShortsResponseType {
  code: 200;
  data: {
    content: ShortsDataType[];
    currentPageNum: number;
    first: boolean;
    last: boolean;
    pageSize: number;
    sort: {
      direction: 'ASC' | 'DESC';
      orderProperty: '"storeCount"' | 'averageRating';
      sorted: boolean;
    };
    totalCount: number;
  };
}

interface GalleryDataType {
  imageId: number;
  tripRecordId: number;
  tripRecordStoreCount: number;
  imageUrl: string;
}

interface GalleryResponseType {
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

interface ExchangeRateData {
  curUnit: string;
  curName: string;
  exchangeRate: string;
}
interface ExchangeRateResponseType {
  code: 200;
  data: ExchangeRateData;
  errorMessage: null;
}

interface CityTopReviewDataType {
  tripRecordId: number;
  tripRecordTitle: string;
  memberId: number;
  memberName: string;
  profileImageUrl: string;
  cityNames: null;
  totalDays: number;
  averageRating: number;
  storedCount: number;
  imageUrl: string;
}

interface CityTopReviewResponse {
  code: 200;
  data: {
    content: CityTopReviewDataType[];
    currentPageNum: number;
    first: boolean;
    last: boolean;
    pageSize: number;
    sort: {
      direction: 'ASC' | 'DESC';
      orderProperty: '"storeCount"' | 'averageRating';
      sorted: boolean;
    };
    totalCount: number;
  };
}
interface SpotListDataType {
  placeId: number;
  placeName: string;
  storedCount: number;
  commentTotal: number;
  imageUrl: string;
}

interface SpotListResponse {
  code: 200;
  data: {
    content: SpotListDataType[];
    currentPageNum: number;
    first: boolean;
    last: boolean;
    pageSize: number;
    sort: {
      direction: 'ASC' | 'DESC';
      orderProperty: '"storeCount"' | 'averageRating';
      sorted: boolean;
    };
    totalCount: number;
  };
}

interface CityState {
  name: string;
  cityId: number;
  isDomestic: boolean;
  country?: string;
}

interface CityGalleryResponse {
  code: 200;
  data: {
    content: GalleryDataType[];
  };
  sort: {
    sorted: boolean;
    direction: string;
    orderProperty: string;
  };
  totalCount: number;
  currentPageNum: number;
  pageSize: number;
  first: boolean;
  last: boolean;
  errorMessage: null;
}
