export interface MemberInfoData {
  memberId: number;
  nickname: string;
  introduction: string;
  profileImageUrl: string;
}

export interface TripRecordsData {
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

export interface CreatorData {
  memberInfo: MemberInfoData;
  tripRecords: TripRecordsData[];
}

export interface PostData {
  imageUrl: string;
  storedCount: number;
  tripRecordTitle: string;
  reviews?: number;
  tripRecordId?: number;
}
