export interface Slide {
  img: string;
  title: string;
  bookmark: number;
}

export interface SwiperProps {
  전체: Slide[];
}

export interface CityData {
  bookmark: number;
  postTitle: string;
  postImg: string;
  reviews?: number;
}

export interface HomeMDDataType {
  france: CityData[];
}
