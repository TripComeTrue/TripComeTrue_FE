export interface Slide {
  tripRecordId: number;
  storedCount: number;
  thumbnailUrl: string;
  tripRecordTitle: string;
}

export interface SwiperProps {
  [key: string]: Slide[];
}

export interface ShortsProps {
  slides: Slide[];
  slidesPerView?: number | 'auto';
}
