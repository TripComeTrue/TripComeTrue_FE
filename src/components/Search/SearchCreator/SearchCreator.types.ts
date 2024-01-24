export interface CreatorData {
  userImg: string;
  username: string;
  userInfo: string;
  rate?: number;
  userId: string;
  review: number;
  shorts: number;
}

export interface Slide {
  img: string;
  title: string;
  bookmark: number;
}

export interface SwiperProps {
  전체: Slide[];
}
