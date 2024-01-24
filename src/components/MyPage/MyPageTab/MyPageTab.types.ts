export enum TabName {
  plan = 'plan',
  review = 'review',
  comment = 'comment',
}

export interface MyPageTabProps {
  tab?: TabName | string;
  setTab: (tab: TabName | string) => void;
}
