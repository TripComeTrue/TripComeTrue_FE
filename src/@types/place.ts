interface PlaceReviewsData {
  isFirst: boolean;
  isLast: boolean;
  nowPageNumber: number;
  placeReviews: PlaceReviewData[];
  totalCount: number;
}

interface PlaceReviewData {
  amILike: boolean;
  commentCount: number;
  content: string;
  createdAt: string;
  likeCount: number;
  memberId: number;
  nickname: string;
  placeReviewId: number;
  imageUrl: string;
}
