interface WishName {
  [name: string]: string;
}
export const WISH_SORT: WishName = {
  trip: 'center',
  city: 'left',
  location: 'space',
};

const WISH_NAME: WishName = {
  trip: '여행 후기',
  city: '도시',
  location: '여행지',
};
export default WISH_NAME;
