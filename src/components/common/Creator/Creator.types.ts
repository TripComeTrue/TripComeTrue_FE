export interface PostData {
  postImg: string;
  bookmark: number;
  postTitle: string;
}

export interface CreatorData {
  userImg: string;
  username: string;
  userInfo: string;
  posts?: PostData[];
}
