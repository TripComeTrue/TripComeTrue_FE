import { IoBookmark } from 'react-icons/io5';
import { BookmarkProps } from './Bookmark.types';
import BookmarkWrap from './Bookmark.styles';

/**
 * 북마크 아이콘과 저장한 숫자를 표현할 수 있습니다.
 * @param count 저장된 횟수를 전달합니다.
 * @returns ReactNode
 */
function Bookmark({ count }: BookmarkProps) {
  return (
    <BookmarkWrap>
      <IoBookmark />
      <span>{count}</span>
    </BookmarkWrap>
  );
}

export default Bookmark;
