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
  profileUrl: string;
}

interface CommentData {
  commentId: number;
  content: string;
  createdAt: string;
  isWriter: boolean;
  memberId: number;
  nickname: string;
  profileUrl: string;
  replyComments: ReplyData[];
}

interface ReplyData {
  commentId: number;
  content: string;
  createdAt: string;
  isWriter: boolean;
  memberId: number;
  nickname: string;
  profileUrl: string;
}
