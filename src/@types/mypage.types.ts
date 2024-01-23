export interface MyTripPlan {
  id: string;
  title: string;
  location: string;
  date: string;
  count: string;
}

export interface MyTripReview {
  postImg: string;
  bookmark: number;
  postTitle: string;
  reviews: number;
  dates: string;
  location: string;
}

export interface MyTripRecordReview {
  id: string;
  tripRecordId: string;
  postTitle: string;
  averageRating: number;
  content: string;
}

export interface MyPlaceReview {
  id: string;
  spotId: string;
  postImg?: string;
  text: string;
  likes: number;
  comments: number;
  dates: string;
}

export interface Notification {
  id: string;
  title: string;
  text?: string;
  time: string;
  read: boolean;
}

export interface CheckPasswordReqBody {
  newPassword: string;
  confirmPassword: string;
}

export interface NicknameReqBody {
  nickname: string;
}

export interface NicknameResBody {
  code: number;
  data: {
    nickname: string;
  };
}

export interface IntroductionReqBody {
  introduction: string;
}

export interface IntroductionResBody {
  code: number;
  data: {
    introduction: string;
  };
}

// 보관 도시 리스트
export interface CityStoresResBody {
  code: number;
  data: CityStores;
}

export interface Stores {
  pageable: Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: Sort2;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

export type CityStores = Stores & {
  content: CityStoresContent[];
};

export interface CityStoresContent {
  id: number;
  name: string;
  language: string;
  weatherRecommendation: string;
  weatherDescription: string;
  country: string;
  storeCount: number;
  imageUrl: string;
}

export interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface Sort2 {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface PlaceReviewResBody {
  code: number;
  data: PlaceReviewData;
}

export interface PlaceReviewData {
  totalCount: number;
  nowPageNumber: number;
  isFirst: boolean;
  isLast: boolean;
  placeReviews: PlaceReview[];
}

export interface PlaceReview {
  placeReviewId: number;
  memberId: number;
  nickname: string;
  profileUrl: string;
  imageUrl?: string;
  content: string;
  likeCount: number;
  createdAt: string;
  amILike: boolean;
  commentCount: number;
}

// 보관 여행지 리스트
export interface PlacesStoresResBody {
  code: number;
  data: CityStores;
}
export type PlacesStores = Stores & {
  content: PlacesStoresContent[];
};
interface PlacesStoresContent {
  id: number;
  name: string;
  address: string;
  latitude: string;
  longtitude: string;
  cityId: number;
}

// 보관 여행 후기 리스트
export interface TripStoresResBody {
  code: number;
  data: TripStores;
}
export type TripStores = Stores & {
  content: TripStoresContent[];
};
export interface TripStoresContent {
  id: number;
  title: string;
  content: string;
  expenseRangeType: string;
  countries: string;
  tripStartDay: string;
  tripEndDay: string;
  totalDays: number;
  averageRating: number;
  viewCount: number;
  storeCount: number;
  commentCount: number;
  imageUrl: string;
}

// 내 정보 가져오기
export interface MemberDetailResBody {
  code: number;
  data: MemberDetail;
}

export interface MemberDetail {
  id: number;
  nickname: string;
  profileImage: string;
  totalPoint: number;
  tripLevel: string;
  introduction?: string;
}
