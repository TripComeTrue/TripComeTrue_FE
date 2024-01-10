export interface Slide {
  img: string;
  title: string;
  bookmark: number;
}

export interface SwiperProps {
  [key: string]: Slide[];
}

export interface ShortsProps {
  slidesPerView?: number;
}
