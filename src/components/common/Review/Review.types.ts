export interface SlideHotItem {
  title: string;
  bookmark: number;
  img: string;
  rate: number;
  username: string;
  userphoto: string;
  nights: string;
  postTitle: string;
  tripRecordId: number;
}

export interface ReviewProps {
  slides: SlideHotItem[];
  slidesPerView?: number | 'auto';
}
