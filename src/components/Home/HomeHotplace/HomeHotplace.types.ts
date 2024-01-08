export interface SlideHotItem {
  title: string;
  bookmark: number;
  subtitle: string;
  img: string;
  rate: number;
  username: string;
  userphoto: string;
  nights: string;
  postTitle: string;
}

export interface SlideHots {
  [key: string]: SlideHotItem[];
}

export interface LabelProps {
  checked: boolean;
}
