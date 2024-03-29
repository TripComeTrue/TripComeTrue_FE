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
      direction: string;
      orderProperty: string;
      sorted: boolean;
    };
    totalCount: number;
  };
}

interface GalleryDataType {
  imageId?: number;
  tripRecordId: number;
  tripRecordStoreCount: number;
  imageUrl: string;
}

interface CityGalleryResponseType {
  code: 200;
  data: GalleryDataType[];
  errorMessage: null;
}
interface SpotGalleryResponseType {
  code: 200;
  data: {
    content: GalleryDataType[];
    empty: boolean;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    pageable: {
      pageNumber: number;
      pageSize: number;
      sort: {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
      };
      offset: number;
      paged: boolean;
      unpaged: boolean;
    };
    size: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    totalElements: number;
    totalPages: number;
  };
  errorMessage?: null;
}

interface CityInfoDataType {
  id: number;
  name: string;
  language: string;
  timeDifference?: string;
  voltage?: string;
  visa?: string;
  curUnit?: string;
  curName?: string;
  latitude: number;
  longitude: number;
  isStored: boolean;
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
  country: string;
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
  placeId: string;
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
      direction: string;
      orderProperty: string;
      sorted: boolean;
    };
    totalCount: number;
  };
}

interface CityState {
  id?: number;
  name: string;
  cityId: number;
  isDomestic: boolean;
}

interface CityGalleryResponse {
  code: 200;
  data: {
    content: GalleryDataType[];
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
  };
}

interface CityisStoredResponse {
  code: 200;
  data: {
    isStored: boolean;
  };
  errorMessage: null;
}
interface FetchCityisStoredResponse {
  code: 200;
  data: {};
  errorMessage: null;
}
