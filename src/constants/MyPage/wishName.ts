interface WishName {
  [name: string]: string;
}
export const WISH_SORT: WishName = {
  'trip-records': 'center',
  cities: 'left',
  places: 'space',
};

const WISH_NAME: WishName = {
  'trip-records': '여행 후기',
  cities: '도시',
  places: '여행지',
};
export default WISH_NAME;
