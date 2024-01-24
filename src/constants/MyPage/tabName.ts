import { TabName } from '@/components/MyPage/MyPageTab/MyPageTab.types';

interface TabItem {
  key: TabName;
  name: string;
}

const TAB_ITEMS: TabItem[] = [
  {
    key: TabName.plan,
    name: '내 여행 계획',
  },
  {
    key: TabName.review,
    name: '내 여행 후기',
  },
  {
    key: TabName.comment,
    name: '리뷰',
  },
];

export default TAB_ITEMS;
