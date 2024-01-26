import { Slide } from './Shorts.types';
import * as Styled from './Shorts.style';
import Bookmark from '../Bookmark/Bookmark';

const ShortsSwiper: React.FC<Slide> = ({
  thumbnailUrl,
  tripRecordTitle,
  storedCount,
  // tripRecordId,
}) => {
  return (
    <Styled.SliderContent>
      <Styled.SliderBackground>
        <img src={thumbnailUrl} alt={tripRecordTitle} />
      </Styled.SliderBackground>
      <Styled.Bookmark>
        <Bookmark count={storedCount} />
      </Styled.Bookmark>
      <Styled.ShortTitle>{tripRecordTitle}</Styled.ShortTitle>
    </Styled.SliderContent>
  );
};
export default ShortsSwiper;
