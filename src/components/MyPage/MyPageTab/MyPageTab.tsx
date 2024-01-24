import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import TAB_ITEMS from '@/constants/MyPage/tabName';
import { MyPageTabProps, TabName } from './MyPageTab.types';
import * as Styled from './MyPageTab.styles';
import isEnumValue from '@/utils/isEnumValue';

function MyPageTab({ tab, setTab }: MyPageTabProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParams = searchParams.get('tab');

  const onClickTabItem = (tabName: TabName) => {
    setTab(tabName);
    setSearchParams({ tab: tabName });
  };

  useEffect(() => {
    if (isEnumValue(TabName, tabParams)) setTab(tabParams);
    else setTab(TabName.plan);
  }, [tabParams]);

  return (
    <Styled.MyPageTabWrap>
      {TAB_ITEMS.map((tabItem) => (
        <Styled.MyPageTabItem
          type="button"
          key={tabItem.key}
          onClick={() => onClickTabItem(tabItem.key)}
          $isactive={`${tab === tabItem.key}`}>
          {tabItem.name}
        </Styled.MyPageTabItem>
      ))}
    </Styled.MyPageTabWrap>
  );
}

export default MyPageTab;
