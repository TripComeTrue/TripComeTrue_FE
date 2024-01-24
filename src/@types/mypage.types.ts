export interface MyTripPlan {
  id: string;
  title: string;
  location: string;
  date: string;
  count: string;
}

export interface MyTripReview {
  postImg: string;
  bookmark: number;
  postTitle: string;
  reviews: number;
  dates: string;
  location: string;
}

export interface MyTripRecordReview {
  id: string;
  tripRecordId: string;
  postTitle: string;
  averageRating: number;
  content: string;
}

export interface MyPlaceReview {
  id: string;
  spotId: string;
  postImg?: string;
  text: string;
  likes: number;
  comments: number;
  dates: string;
}

export interface Notification {
  id: string;
  title: string;
  text?: string;
  time: string;
  read: boolean;
}
