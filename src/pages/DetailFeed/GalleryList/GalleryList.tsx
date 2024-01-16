import { Bookmark, SimpleNav } from '@/components/common';
import * as Styled from './GalleryList.styles';
import { Filter } from '@/components/DetailFeed';
import jeju from '/domestic1.jpg';

const GalleryList = () => {
  return (
    <div>
      <SimpleNav>방콕</SimpleNav>
      <Filter />
      <Styled.GalleryListBox>
        <Styled.PhotoBox>
          <Styled.BookMarkBox>
            <Bookmark count={20} />
          </Styled.BookMarkBox>
          <Styled.Photo src={jeju} alt="방콕 사진" />
        </Styled.PhotoBox>
        <Styled.PhotoBox>
          <Styled.BookMarkBox>
            <Bookmark count={20} />
          </Styled.BookMarkBox>
          <Styled.Photo src={jeju} alt="방콕 사진" />
        </Styled.PhotoBox>
        <Styled.PhotoBox>
          <Styled.BookMarkBox>
            <Bookmark count={20} />
          </Styled.BookMarkBox>
          <Styled.Photo src={jeju} alt="방콕 사진" />
        </Styled.PhotoBox>
        <Styled.PhotoBox>
          <Styled.BookMarkBox>
            <Bookmark count={20} />
          </Styled.BookMarkBox>
          <Styled.Photo src={jeju} alt="방콕 사진" />
        </Styled.PhotoBox>
        <Styled.PhotoBox>
          <Styled.BookMarkBox>
            <Bookmark count={20} />
          </Styled.BookMarkBox>
          <Styled.Photo src={jeju} alt="방콕 사진" />
        </Styled.PhotoBox>
      </Styled.GalleryListBox>
    </div>
  );
};

export default GalleryList;
