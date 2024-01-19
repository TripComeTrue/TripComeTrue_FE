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
