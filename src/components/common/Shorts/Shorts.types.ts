export interface Slide {
  img: string;
  title: string;
  bookmark: number;
  //
  // id?: number;
  // storedCount?: number;
  // tripRecordId?: number;
  // tripRecordTitle?: string;
  // videoUrl?: string;
}

export interface SwiperProps {
  [key: string]: Slide[];
}

export interface ShortsProps {
  slides: Slide[];
  slidesPerView?: number | 'auto';
}
