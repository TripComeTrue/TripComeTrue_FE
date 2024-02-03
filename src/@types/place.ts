interface PlaceReviewsData {
  isFirst: boolean;
  isLast: boolean;
  nowPageNumber: number;
  placeReviews: PlaceReviewData[];
  totalCount: number;
}

interface PlaceReviewData {
  placeReviewId: number;
  memberId: number;
  nickname: string;
  profileUrl: string;
  imageUrl: string;
  content: string;
  likeCount: number;
  createdAt: string;
  amILike: boolean;
  commentCount: number;
  comments: CommentData[];
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
