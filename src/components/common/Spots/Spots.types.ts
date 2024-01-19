export interface PostData {
  postImg: string;
  bookmark: number;
  postTitle: string;
  reviews?: number;
}

export interface SpotsProps {
  creator: PostData[];
  slidesPerView?: number;
  sort: 'left' | 'center' | 'space';
  fontSize?: number;
}

export interface SpotsWishListProps {
  isDelete?: boolean;
  onDelete?: () => void;
}

export interface SpotsSwiperProps extends PostData {
  sort: 'left' | 'center' | 'space';
  fontSize: number;
}

export interface CreatorData {
  userImg: string;
  username: string;
  userInfo: string;
  posts: PostData[];
}

export interface HotCreatorDataTypes {
  creator1: CreatorData[];
  creator2: CreatorData[];
  creator3: CreatorData[];
  creator4: CreatorData[];
}
