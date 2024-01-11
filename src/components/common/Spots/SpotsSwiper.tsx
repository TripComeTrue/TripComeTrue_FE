import React from 'react';
import { PostData } from './Spots.types';
import * as Styled from './Spots.style';
// import bookmarkIcon from '/bookmarkPress.svg';
import Bookmark from '../Bookmark/Bookmark';

interface SpotsSwiperProps extends PostData {
  sort: 'left' | 'center';
  fontSize: number;
}

const SpotsSwiper: React.FC<SpotsSwiperProps> = ({
  postTitle,
  postImg,
  bookmark,
  sort,
  fontSize,
}) => {
  const TitleComponent =
    sort === 'left' ? Styled.SliderTitleSortLeft : Styled.SliderTitle;

  const titleStyle = fontSize ? { fontSize: `${fontSize}px` } : {};

  return (
    <>
      <Styled.SliderImg>
        <img src={postImg} alt="img" />
        <Styled.Bookmark>
          <Bookmark count={bookmark} />
        </Styled.Bookmark>
      </Styled.SliderImg>

      <TitleComponent style={titleStyle}>{postTitle}</TitleComponent>
    </>
  );
};

export default SpotsSwiper;
