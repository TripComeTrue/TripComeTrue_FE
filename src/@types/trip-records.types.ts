interface TripRecordData {
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

interface TripRecordDetailData {
  isStored: boolean;
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
  videoUrl: string;
  memberId: number;
}

interface TripRecordLatestReviewData {
  totalCount: number;
  latestTripRecordReview: {
    tripRecordId: number;
    tripRecordTitle: string;
    tripRecordReviewId: number;
    memberId: number;
    nickname: string;
    ratingScore: number;
    content: string;
    likeCount: number;
    amILike: boolean;
    createdAt: string;
    imageUrl: string;
  };
  myRatingScore: number;
  myTripRecordReviewId: number;
  canRegisterContent: boolean;
}

interface CommentData {
  commentId: number;
  content: string;
  createdAt: string;
  isWriter: boolean;
  memberId: number;
  nickname: string;
  profileUrl: string;
  replyComments: ReplyData[];
}

interface ReplyData {
  commentId: number;
  content: string;
  createdAt: string;
  isWriter: boolean;
  memberId: number;
  nickname: string;
  profileUrl: string;
}

interface TripRecordReviewData {
  tripRecordTitle: string;
  imageUrl: string;
  content: string;
  ratingScore: number;
}
