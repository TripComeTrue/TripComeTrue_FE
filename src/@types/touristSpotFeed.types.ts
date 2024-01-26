interface SpotInfoDataType {
  id: number;
  name: string;
  cityId: number;
  address: string;
  storedCount: number;
  latitude: number;
  longitude: number;
  phoneNumber?: number;
  weekdayCloseTime?: number;
  weekdayOpenTime?: number;
  weekendCloseTime?: number;
  weekendOpenTime?: number;
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