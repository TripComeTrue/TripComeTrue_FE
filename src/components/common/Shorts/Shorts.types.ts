export interface Slide {
  thumbnailUrl: string;
  tripRecordTitle: string;
  storeCount: number;
}

export interface SwiperProps {
  [key: string]: Slide[];
}

export interface ShortsProps {
  slides: Slide[];
  slidesPerView?: number | 'auto';
}
