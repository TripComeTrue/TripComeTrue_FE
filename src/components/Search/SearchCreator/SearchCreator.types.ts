export interface Member {
  memberId: number;
  nickname: string;
  introduction: string;
  profileImageUrl: string;
  averageRating: number;
}

export interface Video {
  videoId: number;
  tripRecordId: number;
  tripRecordTitle: string;
  thumbnailUrl: string;
  videoUrl: string;
  storeCount: number;
  storedCount: number;
  memberId: number;
  memberName: string;
  profileImageUrl: string;
}

export interface TripRecord {
  tripRecordId: number;
  tripRecordTitle: string;
  memberId: number;
  memberName: string;
  profileImageUrl: string;
  cityNames: string[] | null;
  totalDays: number;
  averageRating: number;
  storedCount: number;
  imageUrl: string;
}

export interface CreatorResponse {
  members: Member[];
  videos: Video[];
  tripRecords: TripRecord[];
}
