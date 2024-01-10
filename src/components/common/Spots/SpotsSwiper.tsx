import React from 'react';
import { PostData } from './Spots.types';
import * as Styled from './Spots.style';
import bookmarkIcon from '/bookmarkPress.svg';

const SpotsSwiper: React.FC<PostData> = ({ postTitle, postImg, bookmark }) => (
  <>
    <Styled.SliderImg>
      <img src={postImg} alt="img" />
      <Styled.Bookmark>
        <img src={bookmarkIcon} alt="bookmarkIcon" />
        {bookmark}
      </Styled.Bookmark>
    </Styled.SliderImg>

    <Styled.SliderTitle>{postTitle}</Styled.SliderTitle>
  </>
);

export default SpotsSwiper;
