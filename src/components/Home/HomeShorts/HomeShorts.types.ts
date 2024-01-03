export interface LabelProps {
  checked: boolean;
}

export type Slide = {
  img: string;
  title: string;
  bookmark: number;
};

export type SlideShorts = {
  [key: string]: Slide[];
};
