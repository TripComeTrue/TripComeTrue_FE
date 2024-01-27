export interface MembersData {
  memberId: number;
  nickname: string;
  introduction: string;
  profileImageUrl: string;
  averageRating: number;
}

export interface VideosData {
  videoId: number;
  tripRecordId: number;
  tripRecordTitle: string;
  thumbnailUrl: string;
  videoUrl: string;
  storedCount: number;
  memberId: number;
  memberName: string;
  profileImageUrl: string;
}

export interface TripRecordsData {
  tripRecordId: number;
  tripRecordTitle: string;
  memberId: number;
  memberName: string;
  profileImageUrl: string;
  cityNames: string;
  totalDays: number;
  averageRating: number;
  storedCount: number;
  imageUrl: string;
}

export interface CreatorResponse {
  members: MembersData[];
  videos: VideosData[];
  tripRecords: TripRecordsData[];
}
