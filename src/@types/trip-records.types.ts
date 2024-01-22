interface TripRecord {
  tripRecordId: string;
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
  schedules: DayData[];
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
  schedules: SchedulesData[];
  tags: TagData[];
  totalDays: number;
  tripEndDay: string;
  tripStartDay: string;
  title: string;
  storeCount: number;
}

interface ShortData {
  tripRecordId: number;
  videoId: number;
  thumbnailUrl: string;
  member: {
    nickname: string;
  };
}
