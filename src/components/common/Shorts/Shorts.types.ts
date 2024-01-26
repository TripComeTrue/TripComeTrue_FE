export interface Slide {
  storeCount: number;
  storedCount?: number;
  thumbnailUrl?: string;
  tripRecordTitle: string;
  videoUrl: string;
  videoId?: number;
  tripRecordId: number;
  memberId: number;
  memberName: string;
  profileImageUrl: string;
}

export interface SwiperProps {
  [key: string]: Slide[];
}

export interface ShortsProps {
  slides: Slide[];
  slidesPerView?: number | 'auto';
}
