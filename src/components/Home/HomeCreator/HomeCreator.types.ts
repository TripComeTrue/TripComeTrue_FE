export interface PostData {
  postImg: string;
  bookmark: number;
  postTitle: string;
}

export interface CreatorData {
  userImg: string;
  username: string;
  userInfo: string;
  rate?: number;
  posts: PostData[];
}

export interface HotCreatorDataTypes {
  creator1: CreatorData[];
  creator2: CreatorData[];
  creator3: CreatorData[];
  creator4: CreatorData[];
}
