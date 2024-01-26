import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { SpotsSwiperProps, SpotsWishListProps } from './Spots.types';
import * as Styled from './Spots.style';
import messageIcon from '/message.svg';
import Bookmark from '../Bookmark/Bookmark';
import pxToRem from '@/utils/pxToRem';

const SpotsSwiper: React.FC<SpotsSwiperProps & SpotsWishListProps> = ({
  tripRecordTitle,
  imageUrl,
  storedCount,
  reviews,
  sort,
  fontSize,
  id,
  isDelete,
  onDelete,
}) => {
  const fontSizeRem = pxToRem(fontSize);

  const titleStyle = fontSize ? { fontSize: fontSizeRem } : {};

  return (
    <>
      <Styled.SliderImg>
        <img src={imageUrl} alt="img" />
        <Styled.Bookmark>
          <Bookmark count={storedCount} />
        </Styled.Bookmark>
        {isDelete && onDelete && id && (
          <Styled.DeleteBtn type="button" onClick={() => onDelete(id)}>
            <IoCloseSharp />
          </Styled.DeleteBtn>
        )}
      </Styled.SliderImg>

      {(() => {
        switch (sort) {
          case 'left':
            return (
              <Styled.SliderTitleSortLeft style={titleStyle}>
                {tripRecordTitle}
              </Styled.SliderTitleSortLeft>
            );
          case 'center':
            return (
              <Styled.SliderTitle style={titleStyle}>
                {tripRecordTitle}
              </Styled.SliderTitle>
            );
          case 'space':
            return (
              <Styled.SliderTitleSpace style={titleStyle}>
                <Styled.SpaceTitle>{tripRecordTitle}</Styled.SpaceTitle>
                <Styled.SpaceImg>
                  <img src={messageIcon} alt="img" />
                  {reviews}
                </Styled.SpaceImg>
              </Styled.SliderTitleSpace>
            );
          default:
            return (
              <Styled.SliderTitle style={titleStyle}>
                {tripRecordTitle}
              </Styled.SliderTitle>
            );
        }
      })()}
    </>
  );
};

export default SpotsSwiper;
