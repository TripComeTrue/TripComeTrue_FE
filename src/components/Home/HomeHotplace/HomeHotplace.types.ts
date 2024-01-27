export interface SlideHotCity {
  cityId: number;
  cityName: string;
  storedCount: number;
  subtitle: string;
  imageUrl: string;
  averageRating: number;
  memberName: string;
  profileImageUrl: string;
  totalDays: string;
  tripRecordTitle: string;
}

export interface SlideHotReview {
  cityNames: string[];
  tripRecordId: number;
  storedCount: number;
  subtitle: string;
  imageUrl: string;
  averageRating: number;
  memberName: string;
  profileImageUrl: string;
  totalDays: string;
  tripRecordTitle: string;
}

// export interface SlideHots {
//   [key: string]: SlideHotItem[];
// }

export interface LabelProps {
  checked: boolean;
}
