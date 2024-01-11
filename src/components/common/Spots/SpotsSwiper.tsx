import React from 'react';
import { SpotsSwiperProps } from './Spots.types';
import * as Styled from './Spots.style';
import bookmarkIcon from '/bookmarkDefault.svg';
import Bookmark from '../Bookmark/Bookmark';

const SpotsSwiper: React.FC<SpotsSwiperProps> = ({
  postTitle,
  postImg,
  bookmark,
  reviews,
  sort,
  fontSize,
}) => {
  // const TitleComponent =
  //   sort === 'left' ? Styled.SliderTitleSortLeft : Styled.SliderTitle;

  const titleStyle = fontSize ? { fontSize: `${fontSize}px` } : {};

  return (
    <>
      <Styled.SliderImg>
        <img src={postImg} alt="img" />
        <Styled.Bookmark>
          <Bookmark count={bookmark} />
        </Styled.Bookmark>
      </Styled.SliderImg>

      {(() => {
        switch (sort) {
          case 'left':
            return (
              <Styled.SliderTitleSortLeft style={titleStyle}>
                {postTitle}
              </Styled.SliderTitleSortLeft>
            );
          case 'center':
            return (
              <Styled.SliderTitle style={titleStyle}>
                {postTitle}
              </Styled.SliderTitle>
            );
          case 'space':
            return (
              <Styled.SliderTitleSpace style={titleStyle}>
                <Styled.SpaceTitle>{postTitle}</Styled.SpaceTitle>
                <Styled.SpaceImg>
                  <img src={bookmarkIcon} alt="img" />
                  {reviews}
                </Styled.SpaceImg>
              </Styled.SliderTitleSpace>
            );
          default:
            return (
              <Styled.SliderTitle style={titleStyle}>
                {postTitle}
              </Styled.SliderTitle>
            );
        }
      })()}
    </>
  );
};

export default SpotsSwiper;
