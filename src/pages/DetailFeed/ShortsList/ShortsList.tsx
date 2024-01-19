import { Filter } from '@/components/DetailFeed';
import * as Styled from './ShortsList.styles';
import ShortsSwiper from '@/components/common/Shorts/ShortsSwiper';
import bangkok from '/bangkok.png';
import { SimpleNav } from '@/components/common';

const ShortsList = () => {
  return (
    <Styled.ShortsListWrapper>
      <SimpleNav>방콕</SimpleNav>
      <Filter orderOption="최신순" />
      <Styled.ShortsListBox>
        <ShortsSwiper
          img={bangkok}
          title="방콕여행 꿀팁 알려드립니다"
          bookmark={20}
        />
        <ShortsSwiper
          img={bangkok}
          title="방콕여행 꿀팁 알려드립니다"
          bookmark={20}
        />
        <ShortsSwiper
          img={bangkok}
          title="방콕여행 꿀팁 알려드립니다"
          bookmark={20}
        />
        <ShortsSwiper
          img={bangkok}
          title="방콕여행 꿀팁 알려드립니다"
          bookmark={20}
        />
        <ShortsSwiper
          img={bangkok}
          title="방콕여행 꿀팁 알려드립니다"
          bookmark={20}
        />
      </Styled.ShortsListBox>
    </Styled.ShortsListWrapper>
  );
};

export default ShortsList;
