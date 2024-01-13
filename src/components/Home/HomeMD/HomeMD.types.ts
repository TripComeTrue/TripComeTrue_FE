export interface CityData {
  bookmark: number;
  postTitle: string;
  postImg: string;
  reviews?: number;
}

export interface HomeMDData {
  france: CityData[];
  seoul: CityData[];
  southEast: CityData[];
}
