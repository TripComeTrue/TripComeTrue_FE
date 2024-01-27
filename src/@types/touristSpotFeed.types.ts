interface SpotInfoDataType {
  id: number;
  name: string;
  cityId: number;
  address: string;
  storedCount: number;
  latitude: number;
  isStored: boolean;
  longitude: number;
  phoneNumber?: number;
  weekdayCloseTime?: number;
  weekdayOpenTime?: number;
  weekendCloseTime?: number;
  weekendOpenTime?: number;
  description?: string;
}

interface SpotInfoResponseType {
  code: 200;
  data: SpotInfoDataType;
  errorMessage: null;
}

interface SpotMapDataType {
  imageUrl: string;
  latitude: number;
  longitude: number;
  placeId: number;
  placeName: string;
}

interface SpotMapResponseType {
  code: 200;
  data: SpotInfoDataType[];
  errorMessage: null;
}

interface SpotTopReviewDataType {
  tripRecordId: number;
  title: string;
  countries: string;
  averageRating: number;
  imageUrl: string;
  totalDays: number;
  commentCount: number;
  storeCount: number;
  member: {
    nickname: string;
    profileImage: string;
  };
}

interface SpotTopReviewResponseType {
  code: 200;
  data: SpotTopReviewDataType[];
  errorMessage: null;
}

interface RecommendSpotDataType {
  imageUrl: string;
  placeId: number;
  placeName: string;
  latitude: number;
  longitude: number;
  storedCount: number;
  reviewCount: number;
}

interface RecommendSpotResponseType {
  code: 200;
  data: RecommendSpotDataType[];
}

interface SpotGalleyListResponse {
  code: 200;
  data: {
    content: [
      { tripRecordId: number; imageUrl: string; tripRecordStoreCount: number },
    ];
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
    totalPages: boolean;
    totalElements: number;
    last: boolean;
    size: number;
    number: number;
    sort: { empty: boolean; sorted: boolean; unsorted: true };
    numberOfElements: number;
    first: boolean;
    empty: boolean;
  };
}
