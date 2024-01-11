import React from 'react';
import { SpotsSwiperProps } from './Spots.types';
import * as Styled from './Spots.style';
import messageIcon from '/message.svg';
import Bookmark from '../Bookmark/Bookmark';
import pxToRem from '@/utils/pxToRem';

const SpotsSwiper: React.FC<SpotsSwiperProps> = ({
  postTitle,
  postImg,
  bookmark,
  reviews,
  sort,
  fontSize,
}) => {
  const fontSizeRem = pxToRem(fontSize);

  const titleStyle = fontSize ? { fontSize: fontSizeRem } : {};

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
                  <img src={messageIcon} alt="img" />
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
