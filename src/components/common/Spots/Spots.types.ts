export interface PostData {
  imageUrl: string;
  storedCount: number;
  tripRecordTitle: string;
  reviews?: number;
  id?: number;
}

export interface SpotsProps {
  creator: PostData[];
  slidesPerView?: number;
  sort: 'left' | 'center' | 'space';
  fontSize?: number;
}

export interface SpotsWishListProps {
  onDelete?: (id: number) => void;
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
