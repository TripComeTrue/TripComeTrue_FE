interface TripRecord {
  tripRecordId: number;
  title: string;
  countries: string;
  totalDays: number;
  commentCount: number;
  storeCount: number;
  imageUrl: string;
  member: {
    nickname: string;
    profileImage: string;
  };
}

interface ImagesData {
  id: number;
  imageUrl: string;
  tagType: string;
  tagUrl: string;
  tripRecordId: number;
}

interface TagData {
  hashTagType: string;
  id: number;
  tripRecordId: number;
}

interface SchedulesData {
  schedules: { [key: string]: DayData[] };
}

interface DayData {
  cityName: string;
  content: string;
  countryName: string;
  dayNumber: number;
  id: number;
  latitude: number;
  longitude: number;
  ordering: number;
  placeId: number;
  placeName: string;
  tagType: string;
  tagUrl: string;
  tripRecordId: number;
  images: { id: number; imageUrl: string }[];
  videos: { id: number; videoUrl: string }[];
}

interface TripRecordDetail {
  averageRating: number;
  content: string;
  countries: string;
  expenseRangeType: string;
  id: number;
  images: ImagesData[];
  member: { nickname: string; profileImage: string };
  schedules: { [key: string]: DayData[] };
  tags: TagData[];
  totalDays: number;
  tripEndDay: string;
  tripStartDay: string;
  title: string;
  storeCount: number;
}

interface ShortData {
  member: {
    nickname: string;
    profileImage: string;
  };
  thumbnailUrl: string;
  tripRecordId: number;
  tripRecordStoreCount: number;
  tripRecordTitle: string;
  videoId: number;
}

interface TripRecordLatestReview {
  totalCount: number;
  latestTripRecordReview: {
    tripRecordId: number;
    tripRecordTitle: string;
    tripRecordReviewId: number;
    memberId: number;
    nickname: string;
    ratingStore: number;
    content: string;
    likeCount: number;
    amILike: boolean;
    createdAt: string;
  };
  myRatingScore: number;
}
