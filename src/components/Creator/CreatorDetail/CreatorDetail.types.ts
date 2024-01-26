export interface CreatorData {
  memberId: number;
  nickname: string;
  introduction: string;
  profileImageUrl: string;
  averageRating: number;
  tripRecordTotal: number;
  videoTotal: number;
}

export interface CreatorDetailProps {
  data: {
    memberDetailInfo: CreatorData;
    videos: Video[];
    tripRecords: TripRecord[];
  } | null;
}

interface Video {
  videoId: number;
  tripRecordId: number;
  tripRecordTitle: string;
  videoUrl: string;
  thumbnailUrl: string;
  storeCount: number;
  memberId: number;
  memberName: string;
  profileImageUrl: string;
}

interface TripRecord {
  tripRecordId: number;
  tripRecordTitle: string;
  memberId: number;
  memberName: string;
  profileImageUrl: string;
  totalDays: number;
  averageRating: number;
  storedCount: number;
  imageUrl: string;
}
