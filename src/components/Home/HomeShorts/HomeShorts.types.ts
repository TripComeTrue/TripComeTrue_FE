export interface LabelProps {
  checked: boolean;
}

export interface Slide {
  img: string;
  title: string;
  bookmark: number;
}

export interface SlideShorts {
  [key: string]: Slide[];
}

export interface ShortsProps {
  slides: Slide[];
  slidesPerView?: number | 'auto';
}
