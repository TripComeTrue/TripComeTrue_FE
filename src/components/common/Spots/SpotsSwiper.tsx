import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { SpotsSwiperProps, SpotsWishListProps } from './Spots.types';
import * as Styled from './Spots.style';
import messageIcon from '/message.svg';
import Bookmark from '../Bookmark/Bookmark';
import pxToRem from '@/utils/pxToRem';

const SpotsSwiper: React.FC<SpotsSwiperProps & SpotsWishListProps> = ({
  postTitle,
  postImg,
  bookmark,
  reviews,
  sort,
  fontSize,
  isDelete,
  onDelete,
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
        {isDelete && (
          <Styled.DeleteBtn type="button" onClick={onDelete}>
            <IoCloseSharp />
          </Styled.DeleteBtn>
        )}
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
